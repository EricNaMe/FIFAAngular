import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users/users.service";
import {Url} from "url";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide = true;
  hide2 = true;


  constructor(private service: UsersService) { }

  save(user) {
    this.service.createUser(user)
      .subscribe(response => {
        console.log(response);
      });
  }

  ngOnInit(): void {
  }

}
