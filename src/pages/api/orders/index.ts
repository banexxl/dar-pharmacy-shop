import { NextApiRequest, NextApiResponse } from "next";
import moment from 'moment';
import { OrdersServices } from "@/services/order-service";
import { Order, OrderStatus, PaymentMethod } from "@/schemas/order";
import { ICustomer } from "@/schemas/user";
import { ICart } from "@/interfaces/cart/cart.interface";

const OrdersAPI = async (request: NextApiRequest, response: NextApiResponse) => {
     const { cart, userFormSelector, totalItemPrice } = request.body;

     const orderNumber = moment().format('YYYYMMDD') + '-ID-' + Math.floor(Math.random() * 1000)

     const order: Order = {
          orderNumber: orderNumber,
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

     if (request.method === 'POST') {
          try {
               const orderCreated = await OrdersServices().createNewOrder(order);
               if (orderCreated!.message === 'Order successfully created!') {
                    return response.status(200).json({ message: 'Order successfully created!' });
               } else {
                    return response.status(400).json({ message: 'Bad request' });
               }
          } catch (error) {
               return response.status(500).json({ error: 'Internal server error!' });
          }
     } else if (request.method === 'GET') {
          const { id, userId } = request.query; // Extract the order ID and user ID from the query parameters

          try {
               if (id) {
                    const order = await OrdersServices().getOrderById(id as string);
                    if (order) {
                         return response.status(200).json(order);
                    } else {
                         return response.status(404).json({ message: 'Order not found' });
                    }
               } else if (userId) {
                    const userOrders = await OrdersServices().getOrdersByUserId(userId as string);
                    return response.status(200).json(userOrders);
               } else {
                    const orders = await OrdersServices().getAllOrders();
                    return response.status(200).json(orders);
               }
          } catch (error) {
               return response.status(500).json({ error: 'Internal server error!' });
          }
     } else {
          return response.status(405).json({ error: 'Method not allowed!' });
     }
};

export default OrdersAPI;
