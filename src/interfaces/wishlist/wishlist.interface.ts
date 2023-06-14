import IProduct from "../product/product.interface";

export default interface IWishlistItem extends IProduct {

}

export interface IWishList {
          cartItems: IWishlistItem[],
          children?: JSX.IntrinsicElements
}
