import { Order } from "@/schemas/order"
import ICartItem from "../cart/cart.interface"

export interface EmailData {
     email: string,
     customerEmail?: string,
     subject: string,
     name?: string,
     title?: string
     streetAddress?: string,
     city?: string,
     country?: string,
     phoneNumber?: string
     order: Order
}