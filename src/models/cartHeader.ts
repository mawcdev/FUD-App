export interface CartHeader{
    id :number;
    userId?:string;
    couponCode?:string;
    discount:number;
    cartTotal:number;
    firstName?:string;
    lastName?:string;
    email?:string;
    phone?:string;
}