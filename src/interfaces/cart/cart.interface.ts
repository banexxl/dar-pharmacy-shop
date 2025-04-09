import IProduct from "../product/product.interface";

export default interface ICartItem extends IProduct {
     count: number;
}

export interface ICart {
     cartItems: ICartItem[],
     children?: JSX.IntrinsicElements,
}
