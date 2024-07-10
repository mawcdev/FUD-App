import { CartHeader } from "./cartHeader";
import { Product } from "./product";

export interface CartDetails{
    id:number;
    cartHeaderId:number;
    cartHeader?:CartHeader;
    productId:number;
    product?: Product;
    count:number;
}