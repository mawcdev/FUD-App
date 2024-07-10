import { Component } from '@angular/core';
import { LoginRequest } from '../models/login';
import { AuthService } from '../auth.service';
import { CookieService } from 'ngx-cookie-service';
import { LoginResponseDto } from '../models/loginresponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  model:LoginRequest;
  loginResponse : LoginResponseDto;
  /**
   *
   */
  constructor(private authService:AuthService,
    private cookieService:CookieService,
    private router:Router) {
    this.model = {
      userName:'',
      password:''
    }
    this.loginResponse ={
      user : {
        id:'',
        name:"",
        email:"",
        phoneNumber:"",
        roles:[]
      },
      token:""
    }
  }

  login(){
    this.authService.login(this.model)
    .subscribe({
      next: (response) =>{
        if(response.isSuccess){
          console.log(response.result);
          this.loginResponse=response.result;

          // Set cookie
          this.cookieService.set('Authorization', `Bearer ${this.loginResponse.token}`,
            undefined, '/', undefined,true,'Strict'
          );

          // Set user
          this.authService.setUser(this.loginResponse.user);

          // Redirect to home
          this.router.navigateByUrl('/');
        }
      }
    });
  }
}
