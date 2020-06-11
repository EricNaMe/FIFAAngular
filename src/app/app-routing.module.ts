import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PvspComponent} from "./1vs1/pvsp/pvsp.component";
import {ProfileComponent} from "./users/profile/profile.component";
import {ClubesProComponent} from "./clubes-pro/clubes-pro.component";
import {ReglamentoComponent} from "./seccion-reglamento/reglamento/reglamento.component";
import {ClipsComponent} from "./seccion-clips/clips/clips.component";
import {NoticiasComponent} from "./seccion-noticias/noticias/noticias.component";
import {LoginComponent} from "./login-registration/login/login.component";
import {RegisterComponent} from "./login-registration/register/register.component";
import {RegistrationSuccessComponent} from "./login-registration/registration-success/registration-success.component";
import {NotFoundComponent} from "./not-found/not-found.component"; // CLI imports router

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '1vs1', component: PvspComponent},
  {path: 'profile/:id', component: ProfileComponent},
  {path: 'clubespro', component: ClubesProComponent},
  {path: 'rules', component: ReglamentoComponent},
  {path: 'clips', component: ClipsComponent},
  {path: 'news', component: NoticiasComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'registration-success', component: RegistrationSuccessComponent},
  {path: '**', component: NotFoundComponent}
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
