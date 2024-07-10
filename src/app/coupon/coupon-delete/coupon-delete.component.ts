import { Component, OnInit } from '@angular/core';
import { Coupon } from '../../../models/coupon';
import { CouponService } from '../coupon.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-coupon-delete',
  templateUrl: './coupon-delete.component.html',
  styleUrl: './coupon-delete.component.css'
})
export class CouponDeleteComponent implements OnInit {
  coupon?:Coupon;
  couponId:number = 0;
  
  constructor(private couponService:CouponService,
    private router:Router,private activatedRoute:ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((p) => {
      this.couponId = p["id"];

    });
  }
  ngOnInit(): void {
    this.couponService.getCoupon(this.couponId)
      .subscribe(response => {
        if(response.isSuccess){
          this.coupon = response.result
          console.log(this.coupon)
        }
      })
  }

  delete(){
    console.log(this.coupon);
    let id = this.coupon?.id;
    this.couponService.deleteCoupon(id!)
      .subscribe(response =>{
        if(response.isSuccess){
          this.router.navigateByUrl('/coupons');
        }
      })
  }
}
