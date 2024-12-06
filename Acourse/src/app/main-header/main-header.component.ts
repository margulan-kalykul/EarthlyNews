import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.css'
})
export class MainHeaderComponent implements OnInit {
  constructor(public loginService: LoginService) { }

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
}
