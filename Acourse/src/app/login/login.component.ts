import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  logged = false;

  username = '';
  password = '';


  constructor(public loginService: LoginService, private router: Router) {
    if (this.loginService.login(this.username, this.password) && this.logged) {
     this.router.navigate(['account'])
    }
    else {
            this.logged == true;
    }
    this.logged = loginService.getLogged();
  }

  ngOnInit(): void {
    var token;
    if (typeof window !== 'undefined' && window.localStorage) {
      token = localStorage.getItem('token');
    }
    if (token) {
      this.loginService.updateLogged(true);
      // this.logged = true;
    }
  }

  login() {
    this.loginService.login(this.username, this.password).subscribe(res => {
        localStorage.setItem('token', res.token!);

        this.logged = true;
        this.loginService.updateLogged(true);

        this.username = '';
        this.password = '';
        this.router.navigate(['account']);
      });
  }
}
