import { Order } from '@/schemas/order';

export interface EmailData {
     email: string;
     customer_email?: string;
     subject: string;
     name?: string;
     title?: string;
     street_address?: string;
     city?: string;
     country?: string;
     phone_number?: string;
     order: Order;
}
