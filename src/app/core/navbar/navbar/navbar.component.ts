import { Component, OnInit } from '@angular/core';
import { UserDto } from '../../../auth/models/user';
import { AuthService } from '../../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  user?:UserDto;
  constructor(private authService:AuthService,
    private router:Router
  ) {
  }
  ngOnInit(): void {
    this.authService.user().subscribe({
      next : (response) =>{
        console.log('Subscribe to user: ');
        console.log(response);
        this.user = response;
      }
    })
    this.user = this.authService.getUser();
  }
  title = 'fud-app';

  onLogout():void{
    console.log('logout clicked');
    this.authService.logout();
   // this.ngOnInit();
    this.router.navigateByUrl('/');
  }

}
