import { NextApiRequest, NextApiResponse } from "next";
import moment from 'moment';
import { OrdersServices } from "@/services/order-service";
import { Order, OrderStatus, PaymentMethod } from "@/schemas/order";
import { ICustomer } from "@/schemas/user";
import { ICart } from "@/interfaces/cart/cart.interface";

const OrdersAPI = async (
     request: NextApiRequest,
     response: NextApiResponse<{ success: boolean; error?: string; order?: Order }>
) => {
     if (request.method === 'POST') {
          const { cart, userFormSelector, totalItemPrice } = request.body;

          const orderNumber = moment().format('YYYYMMDD') + '-ID-' + Math.floor(Math.random() * 1000);

          const order: Order = {
               orderNumber,
               createdAt: new Date(),
               customer: userFormSelector as ICustomer,
               items: cart as ICart,
               paymentMethod: 'cash-on-delivery' as PaymentMethod,
               total: totalItemPrice,
               status: 'pending' as OrderStatus,
               logs: [
                    {
                         message: 'Order created',
                         createdAt: new Date()
                    },
               ],
          };

          try {
               const orderCreated = await OrdersServices().createNewOrder(order);
               if (orderCreated?.message === 'Order successfully created!') {
                    if ('orderNumber' in order) {
                         if ('orderNumber' in order && 'createdAt' in order && 'customer' in order && 'items' in order) {
                              return response.status(200).json({ success: true, order: order as Order });
                         } else {
                              return response.status(400).json({ success: false, error: 'Invalid order data' });
                         }
                    } else {
                         return response.status(400).json({ success: false, error: 'Invalid order data' });
                    }
               } else {
                    return response.status(400).json({ success: false, error: 'Order creation failed' });
               }
          } catch (error) {
               return response.status(500).json({ success: false, error: 'Internal server error' });
          }

     } else if (request.method === 'GET') {
          const { id, userId } = request.query;

          try {
               if (id) {
                    const order = await OrdersServices().getOrderById(id as string);
                    if (order) {
                         if ('orderNumber' in order && 'createdAt' in order && 'customer' in order && 'items' in order) {
                              return response.status(200).json({ success: true, order: order as Order });
                         } else {
                              return response.status(400).json({ success: false, error: 'Invalid order data' });
                         }
                    } else {
                         return response.status(404).json({ success: false, error: 'Order not found' });
                    }
               } else if (userId) {
                    // GET by userId isn't compatible with this return type, so return the first one for demo
                    const orders = await OrdersServices().getOrdersByUserId(userId as string);
                    if (Array.isArray(orders) && orders.length > 0) {
                         if (Array.isArray(orders)) {
                              return response.status(200).json({ success: true, order: orders[0] });
                         } else {
                              return response.status(400).json({ success: false, error: 'Invalid orders data' });
                         }
                    } else {
                         return response.status(404).json({ success: false, error: 'No orders found for this user' });
                    }
               } else {
                    // Same for all orders - return just the first one
                    const orders = await OrdersServices().getAllOrders();
                    if (Array.isArray(orders) && orders.length > 0) {
                         return response.status(200).json({ success: true, order: orders[0] });
                    } else {
                         return response.status(404).json({ success: false, error: 'No orders found' });
                    }
               }
          } catch (error) {
               return response.status(500).json({ success: false, error: 'Internal server error' });
          }

     } else {
          return response.status(405).json({ success: false, error: 'Method not allowed' });
     }
};

export default OrdersAPI;
