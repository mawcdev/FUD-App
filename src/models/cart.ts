import { CartDetails } from "./cartDetails";
import { CartHeader } from "./cartHeader";

export interface Cart{
    cartHeader:CartHeader;
    cartDetails:CartDetails[]
}