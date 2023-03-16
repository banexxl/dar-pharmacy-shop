import ICartItem from "../cart/cart.interface"

export interface IEmailToFields {
          email: string,
          subject: string,
          name?: string,
          title?: string
          message?: string,
          cart: ICartItem[]
}