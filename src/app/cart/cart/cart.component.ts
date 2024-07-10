import { Component, OnInit } from '@angular/core';
import { Cart } from '../../../models/cart';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cart?:Cart;
  /**
   *
   */
  constructor(private cartService:CartService,
    private router:Router
  ) {
    // this.cart = {
    //   cartHeader:{
    //     id:0,
    //     userId:"",
    //     couponCode:"",
    // discount:0,
    // cartTotal:0,
    // firstName:"",
    // lastName:"",
    // email:"",
    // phone:""
    //   },
    //   cartDetails:[
    //     {
    //       id:0,
    //       cartHeaderId:0,
    //       productId:0,
    //       count:0
    //     }
    //   ]
    // }
  }
  ngOnInit(): void {
   this.loadCart();
  }

  loadCart(){
    this.cartService.getCart()
    .subscribe(response => {
      if(response.isSuccess){
        this.cart = response.result
      }
    })
  }

  checkout(){
    this.router.navigateByUrl('/checkout');
  }

  remove(id:number){
    console.log(id);
    this.cartService.removeFromCart(id)
      .subscribe(response => {
        if(response.isSuccess){
          this.loadCart();
        }
      })
  }

  applyCoupon(couponCode:string){
    if(this.cart){
      this.cart.cartHeader.couponCode = couponCode
      console.log(this.cart)
      this.cartService.applyCoupon(this.cart)
        .subscribe(response => {
          console.log(response)
          if(response.isSuccess){
            this.loadCart()
          }
        })
    }
  }

  removeCoupon(couponCode:string){
    if(this.cart){
      this.cart.cartHeader.couponCode = couponCode
      console.log(this.cart)
      this.cartService.removeCoupon(this.cart)
        .subscribe(response => {
          console.log(response)
          if(response.isSuccess){
            this.loadCart()
          }
        })
    }
  }

  emailCart(){
    if(this.cart){
      this.cartService.emailCart(this.cart)
        .subscribe(response => {
          if(response.isSuccess){
            console.log(response)
          }
        })
    }
  }
}
