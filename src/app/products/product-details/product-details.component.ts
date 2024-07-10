import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../../../models/product';
import { CartService } from '../../cart/cart.service';
import { Cart } from '../../../models/cart';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  prodId:number=0;
  product?:Product;
  productForm:Product;
  constructor(private productService:ProductService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private cartService:CartService
  ) {
    this.activatedRoute.params.subscribe((p) => {
      this.prodId = p["id"];

    });
    this.productForm = {
      id:this.prodId,
      name:"",
      description:"",
      categoryName:"",
      price:0,
      imageUrl:"",
      imageLocalPath:"",
      count:1
    }
  }
  ngOnInit(): void {
    this.loadProduct();
  }
  loadProduct() {
    this.productService.getProduct(this.prodId)
      .subscribe(response =>{
        this.product = response.result
      })
  }

  addToCart(){
    console.log(this.productForm);
    let cart:Cart;
    cart = {
      cartHeader:{
        id:0,
        userId:"",
        discount:0,
        cartTotal:0
      },
      cartDetails:[
        {
          id:0,
          cartHeaderId:0,
          productId:this.productForm.id,
          count:this.productForm.count
        }
      ]
    }
    this.cartService.addToCart(cart)
      .subscribe(response =>{
        if(response.isSuccess){
          this.router.navigateByUrl('/cart');
        }
      })
  }
}
