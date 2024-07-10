import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { ResponseDto } from '../../models/response';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl= `${environment.apiUrl}/product`;

  constructor(private http:HttpClient,
    private cookieService:CookieService
  ) { }

  getProducts(): Observable<ResponseDto>{
    return this.http.get<ResponseDto>(this.apiUrl)
  }

  getProduct(id:number): Observable<ResponseDto>{
    return this.http.get<ResponseDto>(`${this.apiUrl}/${id}?addAuth=true`);
  }

  createProduct(product:Product):Observable<ResponseDto>{
    console.log('service');
    console.log(product);
    const formData = new FormData();
    formData.append('image', product.image!);
    formData.append('name', product.name);
    formData.append('categoryName', product.categoryName);
    formData.append('price', product.price.toString());
    formData.append('description', product.description);
    return this.http.post<ResponseDto>(`${this.apiUrl}?addAuth=true`, formData,{
      headers:{
        "Accept" : "*/*",
        //'Authorization' : this.cookieService.get('Authorization')
      }
    });
  }
}
