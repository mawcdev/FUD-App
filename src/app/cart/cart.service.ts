import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Cart } from '../../models/cart';
import { ResponseDto } from '../../models/response';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiUrl= `${environment.apiUrl}/cart`;
  constructor(private http:HttpClient,
    private authService:AuthService
  ) { }

  getCart(): Observable<ResponseDto>{
    let user = this.authService.getUser();
    let userid = '';
    if(user){
      userid=user.id
    }
    return this.http.get<ResponseDto>(`${this.apiUrl}/user/${userid}?addAuth=true`)
  }

  addToCart(cart:Cart):Observable<ResponseDto>{
    let user = this.authService.getUser();
    if(user){
      cart.cartHeader.userId=user.id
    }
    return this.http.post<ResponseDto>(`${this.apiUrl}/upsert?addAuth=true`, cart);
  }

  removeFromCart(id:number):Observable<ResponseDto>{
    return this.http.post<ResponseDto>(`${this.apiUrl}/remove?addAuth=true`, id);
  }

  applyCoupon(cart:Cart):Observable<ResponseDto>{
    return this.http.post<ResponseDto>(`${this.apiUrl}/applycoupon?addAuth=true`, cart)
  }

  removeCoupon(cart:Cart):Observable<ResponseDto>{
    return this.http.post<ResponseDto>(`${this.apiUrl}/removecoupon?addAuth=true`, cart)
  }

  emailCart(cart:Cart):Observable<ResponseDto>{
    let user = this.authService.getUser();
    if(user){
      cart.cartHeader.email=user.email
    }
    return this.http.post<ResponseDto>(`${this.apiUrl}/emailcartrequest?addAuth=true`, cart)
  }
}
