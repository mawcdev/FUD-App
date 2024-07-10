import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ResponseDto } from '../../models/response';
import { Coupon } from '../../models/coupon';

@Injectable({
  providedIn: 'root'
})
export class CouponService {
  private apiUrl= `${environment.apiUrl}/coupon`;
  constructor(private http:HttpClient) { }

  getCoupons():Observable<ResponseDto>
  {
    return this.http.get<ResponseDto>(`${this.apiUrl}?addAuth=true`)
  }

  getCoupon(id:number):Observable<ResponseDto>{
    return this.http.get<ResponseDto>(`${this.apiUrl}/${id}?addAuth=true`)
  }

  createCoupon(coupon:Coupon):Observable<ResponseDto>{
    return this.http.post<ResponseDto>(`${this.apiUrl}?addAuth=true`, coupon);
  }

  deleteCoupon(id:number):Observable<ResponseDto>{
    return this.http.delete<ResponseDto>(`${this.apiUrl}/${id}?addAuth=true`);
  }
}
