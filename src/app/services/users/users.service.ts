import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Url} from "url";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = 'http://localhost:8080/users';

  constructor(private http: HttpClient) { }

  getUsers() {
   return this.http.get(this.url);
  }
}
