import { Component, OnInit } from '@angular/core';
import { Cart } from '../../../models/cart';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrl: './cart-checkout.component.css'
})
export class CartCheckoutComponent implements OnInit {
  
  cart:Cart;
  constructor(private cartService:CartService) {
    this.cart = {
      cartHeader:{
        id:0,
        userId:"",
        couponCode:"",
    discount:0,
    cartTotal:0,
    firstName:"",
    lastName:"",
    email:"",
    phone:""
      },
      cartDetails:[
        {
          id:0,
          cartHeaderId:0,
          productId:0,
          count:0
        }
      ]
    }
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
}
