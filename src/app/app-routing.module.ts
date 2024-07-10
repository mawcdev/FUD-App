import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { CouponListComponent } from './coupon/coupon-list/coupon-list.component';
import { CouponCreateComponent } from './coupon/coupon-create/coupon-create.component';
import { CouponDeleteComponent } from './coupon/coupon-delete/coupon-delete.component';
import { CartComponent } from './cart/cart/cart.component';
import { CartCheckoutComponent } from './cart/cart-checkout/cart-checkout.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'login', component:LoginComponent},
  {path:'products', component:ProductListComponent},
  {path:'product-details/:id', component:ProductDetailsComponent},
  {path:'product-create', component:ProductCreateComponent},
  {path:'coupons', component:CouponListComponent},
  {path:'coupon-create', component:CouponCreateComponent},
  {path:'coupon-delete/:id', component:CouponDeleteComponent},
  {path:'cart', component:CartComponent},
  {path:'checkout', component:CartCheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
