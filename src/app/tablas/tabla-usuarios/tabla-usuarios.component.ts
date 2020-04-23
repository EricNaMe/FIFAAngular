import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users/users.service";

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.scss']
})
export class TablaUsuariosComponent implements OnInit {
  users: any[];
  displayedColumns: string[] = ['nombre', 'pais'];
  dataSource;


  constructor(private service: UsersService) {}

  ngOnInit(): void {
    this.service.getUsers()
      .subscribe(response => {
        // @ts-ignore
        this.users = response;
        this.dataSource = this.users;
        console.log(this.users);
      });
  }


}
