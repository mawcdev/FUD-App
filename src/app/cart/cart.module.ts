import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { CartCheckoutComponent } from './cart-checkout/cart-checkout.component';



@NgModule({
  declarations: [
    CartComponent,
    CartCheckoutComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class CartModule { }
