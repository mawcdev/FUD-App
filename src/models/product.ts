export interface Product{
    id:number;
    name:string;
    price:number;
    description:string;
    categoryName:string;
    imageUrl:string;
    imageLocalPath:string;
    count:number;
    image?:File;
}