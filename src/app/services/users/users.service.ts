import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Url} from "url";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = 'http://localhost:8080/users';
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private http: HttpClient) { }

  getUsers() {
   return this.http.get(this.url);
  }

  createUser(user) {
    return this.http.post(this.url, JSON.stringify(user), this.httpOptions);
  }

}
