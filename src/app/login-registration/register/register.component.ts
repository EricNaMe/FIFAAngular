import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide = true;
  hide2 = true;

  constructor() { }

  submit(f){
    console.log(f);
  }

  ngOnInit(): void {
  }

}
