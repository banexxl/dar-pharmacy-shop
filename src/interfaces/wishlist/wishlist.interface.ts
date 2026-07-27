import { JSX } from "react";
import Product from "../product/product.interface";

export default interface IWishlistItem extends Product {

}

export interface IWishList {
     cartItems: IWishlistItem[],
     children?: JSX.IntrinsicElements
}
