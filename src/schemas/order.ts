import { ICustomer } from "./user";
import ICartItem, { ICart } from "@/interfaces/cart/cart.interface";
import { IUserForm } from "@/interfaces/checkout/user-form-values.interface";

export type PaymentMethod = 'credit-card' | 'paypal' | 'cash' | 'check' | 'cash-on-delivery';

export type OrderStatus = 'pending' | 'shipped' | 'delivered' | 'cancelled'

export type PaymentStatus = 'pending' | 'successful' | 'failed' | 'refunded'

export type Order = {
     _id?: string;
     orderNumber: string;
     authorizationCode: string;
     total: number;
     createdAt: Date;
     customer: ICustomer;
     items: ICartItem[];
     paymentMethod: PaymentMethod;
     orderStatus: OrderStatus;
     paymentStatus: PaymentStatus;
     statusCode: string;
     transactionNumber: string;
     transactionDate: Date;
     referenceId: string;
     logs: {
          message: string;
          createdAt: Date;
     }[];
}

export type ConfirmationData = {
     userForm: IUserForm;
     order: Order;
     deliveryDate: string;
};