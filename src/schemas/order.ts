import ICartItem from '@/interfaces/cart/cart.interface';
import { Customer } from '@/schemas/customer';

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
     customer?: Customer;
     items?: ICartItem[];
     payment_method: PaymentMethod;
     order_status: OrderStatus;
     payment_status: PaymentStatus;
     transaction_number?: string;
};

export type ConfirmationData = {
     userForm: Customer;
     order: Order;
     deliveryDate: string;
};
