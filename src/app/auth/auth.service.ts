import { Injectable } from '@angular/core';
import { LoginRequest } from './models/login';
import { BehaviorSubject, Observable } from 'rxjs';
import { ResponseDto } from '../../models/response';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UserDto } from './models/user';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  $user = new BehaviorSubject<UserDto | undefined>(undefined);
  constructor(private http:HttpClient,
    private cookieService:CookieService
  ) { }

  login(request:LoginRequest):Observable<ResponseDto>{
    return this.http.post<ResponseDto>(`${environment.authUrl}/login`, {
      userName: request.userName,
      password : request.password
    });
  }

  getAuthorizationToken():string{
    return this.cookieService.get('Authorization');
  }

  setUser(user:UserDto):void{
    this.$user.next(user);
    localStorage.setItem('user-email', user.email);
    localStorage.setItem('user-id', user.id);
    //localStorage.setItem('user-roles', user.roles.join(','));
  }

  user():Observable<UserDto|undefined>{
    return this.$user.asObservable();
  }

  getUser():UserDto|undefined{
    const localemail = localStorage.getItem('user-email');
    const localid = localStorage.getItem('user-id');
    if(localemail && localid){
      const user:UserDto = {
        email:localemail,
        roles:[],
        phoneNumber:'',
        id:localid,
        name:''
      };
      return user;
    }
    return undefined;
  }

  logout(){
    localStorage.clear();
    this.cookieService.delete('Authorization', '/');
  }
}
