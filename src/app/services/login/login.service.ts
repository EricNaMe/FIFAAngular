import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = 'http://localhost:8080/login';
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private http: HttpClient) { }

  getLogin(user) {
    return this.http.post(this.url, JSON.stringify(user), this.httpOptions);
  }
}
