import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CouponCreateComponent } from './coupon-create/coupon-create.component';
import { CouponListComponent } from './coupon-list/coupon-list.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { CouponService } from './coupon.service';
import { CouponDeleteComponent } from './coupon-delete/coupon-delete.component';

@NgModule({
  declarations: [
    CouponCreateComponent,
    CouponListComponent,
    CouponDeleteComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers:[
    CouponService
  ]
})
export class CouponModule { }
