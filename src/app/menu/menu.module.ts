import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {RouterModule} from '@angular/router';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MenuLateralComponent} from './menu-lateral/menu-lateral.component';
import {MenuSuperiorComponent} from './menu-superior/menu-superior.component';
import {LateralOptionsComponent} from './lateral-options/lateral-options.component';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  declarations: [
   MenuLateralComponent,
   MenuSuperiorComponent,
   LateralOptionsComponent
  ],
  imports: [
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    MatExpansionModule,
    MatTooltipModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
  ],
  exports: [
   MenuSuperiorComponent,
   MenuLateralComponent
  ]
})
export class MenuModule { }
