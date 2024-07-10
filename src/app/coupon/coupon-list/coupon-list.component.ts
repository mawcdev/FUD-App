import { Component, OnInit } from '@angular/core';
import { Coupon } from '../../../models/coupon';
import { CouponService } from '../coupon.service';

@Component({
  selector: 'app-coupon-list',
  templateUrl: './coupon-list.component.html',
  styleUrl: './coupon-list.component.css'
})
export class CouponListComponent implements OnInit {
  coupons:Coupon[] = []
  constructor(private couponService:CouponService) {}
  
  ngOnInit(): void {
    this.couponService.getCoupons()
      .subscribe(response => {
        if(response.isSuccess){
          this.coupons = response.result;
        }
      })
  }

}
