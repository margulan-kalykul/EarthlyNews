import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { USER } from '../database/user_hello';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  BASE_URL = 'https://d5a1b872-690b-4e46-bb64-d63b244db87d.mock.pstmn.io/';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  registerUser(userData: USER): Observable<USER> {
    // return this.http.post('/api/users/', userData);
    return this.http.post<USER>(`${this.BASE_URL}/api/users/`, userData, this.httpOptions);
  }
}
