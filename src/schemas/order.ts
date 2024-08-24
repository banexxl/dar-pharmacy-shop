import IProduct from "@/interfaces/product/product.interface";
import { ICustomer } from "./user";
import { ICart } from "@/interfaces/cart/cart.interface";

export type PaymentMethod = 'credit card' | 'paypal' | 'cash' | 'check' | 'cash-on-delivery';

export type OrderStatus = 'pending' | 'shipped' | 'delivered' | 'cancelled'

export type Order = {
     _id?: string;
     orderNumber: string;
     createdAt: Date;
     customer: ICustomer;
     items: ICart;
     paymentMethod: PaymentMethod;
     total: number;
     status: OrderStatus;
     logs: {
          _id: string;
          message: string;
          createdAt: Date;
     }[];
}