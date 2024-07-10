import { Component } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent {
  product:Product;

  /**
   *
   */
  constructor(private productService:ProductService,
    private router:Router
  ) {
    this.product = {
      id:0,
      name:'',
      price:0,
      description:'',
      categoryName:'',
      imageUrl:'',
      imageLocalPath:'',
      count:0,
      image:undefined
    }
  }

  onFileChange(event:Event):void{
    const element = event.currentTarget as HTMLInputElement;
    this.product.image = element.files?.[0];
  }

  create(){
    console.log(this.product);
    this.productService.createProduct(this.product)
      .subscribe(response =>{
        if(response.isSuccess){
          this.router.navigateByUrl('/products');
        }
      })

  }
}
