import { Component } from '@angular/core';
import { Coupon } from '../../../models/coupon';
import { CouponService } from '../coupon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coupon-create',
  templateUrl: './coupon-create.component.html',
  styleUrl: './coupon-create.component.css'
})
export class CouponCreateComponent {
  coupon:Coupon
  /**
   *
   */
  constructor(private couponService:CouponService,
    private router:Router
  ) {
    this.coupon = {
      id:0,
      code:"",
      discountAmount:0,
      minAmount:0
    }
  }

  create(){
    console.log(this.coupon);
    this.couponService.createCoupon(this.coupon)
      .subscribe(response =>{
        if(response.isSuccess){
          this.router.navigateByUrl('/coupons');
        }
      })
  }
}
