import ICartItem from "../cart/cart.interface"

export interface IEmailToFields {
     email: string,
     subject: string,
     name?: string,
     title?: string
     cart: ICartItem[],
     streetAddress?: string,
     city?: string,
     country?: string,
     phoneNumber?: string
}