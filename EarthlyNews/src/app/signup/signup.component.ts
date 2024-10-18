import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { routes } from '../app.routes';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [MatButtonModule, RouterOutlet, FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
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
