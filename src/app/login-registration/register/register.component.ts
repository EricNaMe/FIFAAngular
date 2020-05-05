import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users/users.service";
import {Url} from "url";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide = true;
  hide2 = true;


  constructor(private service: UsersService, private router: Router) { }

  save(user) {
    this.service.createUser(user)
      .subscribe(response => {
        console.log(response);
      });
    this.router.navigate(['/registration-success']);
  }

  ngOnInit(): void {
  }

}
