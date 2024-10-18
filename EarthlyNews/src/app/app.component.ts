import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EarthlyNews';
  login: string = '';
  password: string = '';

  isAuthorized: boolean = false;

  logOut = () => {
    this.isAuthorized = false
  }

  logIn = () => {
    console.log(this.login, this.password);
    this.isAuthorized = true;
  } 
}
