import { Component, OnInit } from '@angular/core';
import { USER } from '../database/user_hello';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  register!: USER;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.register = {
      name: '',
      email: '',
      password: ''
    };

  }

  registerUser() {
    this.userService.registerUser(this.register).subscribe(
      response => {
        alert('User is created');
      },
      error => console.log('error', error)
    );

    this.router.navigate(['account']);
  }
}
