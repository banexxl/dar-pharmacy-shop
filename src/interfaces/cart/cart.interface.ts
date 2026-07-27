import { JSX } from 'react';
import Product from '../product/product.interface';

export default interface ICartItem extends Product {
     count: number;
}

export interface ICart {
     cartItems: ICartItem[];
     children?: JSX.IntrinsicElements;
}
