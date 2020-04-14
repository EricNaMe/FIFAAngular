import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-general',
  templateUrl: './tabla-general.component.html',
  styleUrls: ['./tabla-general.component.scss']
})
export class TablaGeneralComponent implements OnInit {

  nombre: string;
  posicion: number;
  puntos: number;
  pj: number;
  pg: number;
  pe: number;
  pp: number;
  gf: number;
  gc: number;
  dg: number;

  displayedColumns: string[] = ['posicion', 'nombre', 'puntos', 'pj', 'pg', 'pe', 'pp', 'gf', 'gc', 'dg'];


  PeriodicElement = [
    {posicion: 1, nombre: 'Necaxa', puntos: 27, pj: 10, pg: 3, pe: 3, pp: 3, gf: 4, gc: 5, dg: 10},
    {posicion: 2, nombre: 'America', puntos: 25, pj: 10, pg: 3, pe: 3, pp: 3, gf: 4, gc: 5, dg: 10},
    {posicion: 3, nombre: 'Chivas', puntos: 24, pj: 10, pg: 3, pe: 3, pp: 3, gf: 4, gc: 5, dg: 10},
    {posicion: 4, nombre: 'Cruz azul', puntos: 23, pj: 10, pg: 3, pe: 3, pp: 3, gf: 4, gc: 5, dg: 10},
    {posicion: 5, nombre: 'Pumas', puntos: 22, pj: 10, pg: 3, pe: 3, pp: 3, gf: 4, gc: 5, dg: 10},
    {posicion: 6, nombre: 'Tigres', puntos: 21, pj: 10, pg: 3, pe: 3, pp: 3, gf: 4, gc: 5, dg: 10},
    {posicion: 7, nombre: 'Morelia', puntos: 20, pj: 10, pg: 3, pe: 3, pp: 3, gf: 4, gc: 5, dg: 10},
    {posicion: 8, nombre: 'San Luis', puntos: 19, pj: 10, pg: 3, pe: 3, pp: 3, gf: 4, gc: 5, dg: 10},
    {posicion: 9, nombre: 'Leon', puntos: 18, pj: 10, pg: 3, pe: 3, pp: 3, gf: 4, gc: 5, dg: 10},
    {posicion: 10, nombre: 'Pachuca', puntos: 17, pj: 10, pg: 3, pe: 3, pp: 3, gf: 4, gc: 5, dg: 10}
  ];
  dataSource = this.PeriodicElement;

  constructor() { }

  ngOnInit(): void {
  }

}
