import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login: string = '';
  password: string = '';

  isAuthorized: boolean = false;

  doLogOut = () => {  
    this.isAuthorized = false
  }

  doSignUp = () => {
    console.log(this.login, this.password);
    this.isAuthorized = true;
  } 
}
