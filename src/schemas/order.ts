import { ICustomer } from './user';
import ICartItem from '@/interfaces/cart/cart.interface';
import { IUserForm } from '@/interfaces/checkout/user-form-values.interface';

export type PaymentMethod = 'credit-card' | 'paypal' | 'cash' | 'check' | 'cash-on-delivery';

export type OrderStatus = 'pending' | 'shipped' | 'delivered' | 'cancelled';

export type PaymentStatus = 'pending' | 'successful' | 'failed' | 'refunded';

export type Order = {
     id?: string;
     order_number: string;
     customer_id?: string;
     total: number;
     created_at: string;
     updated_at?: string;
     customer?: ICustomer;
     items?: ICartItem[];
     payment_method: PaymentMethod;
     order_status: OrderStatus;
     payment_status: PaymentStatus;
     transaction_number?: string;
};

export type ConfirmationData = {
     userForm: IUserForm;
     order: Order;
     deliveryDate: string;
};
