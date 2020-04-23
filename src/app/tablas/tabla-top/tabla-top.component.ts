import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-tabla-top',
  templateUrl: './tabla-top.component.html',
  styleUrls: ['./tabla-top.component.scss']
})
export class TablaTopComponent implements OnInit {
  nombre: string;
  posicion: number;
  puntos: number;


  displayedColumns: string[] = ['posicion', 'nombre', 'puntos'];


  PeriodicElement = [
    {posicion: 1, nombre: 'Necaxa', puntos: 27},
    {posicion: 2, nombre: 'America', puntos: 25},
    {posicion: 3, nombre: 'Chivas', puntos: 24},
    {posicion: 4, nombre: 'Cruz azul', puntos: 23},
    {posicion: 5, nombre: 'Pumas', puntos: 22}
  ];
  dataSource = this.PeriodicElement;
  constructor(http: HttpClient) { }



  ngOnInit(): void {
  }

}
