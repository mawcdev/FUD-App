import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { UserDto } from './auth/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
