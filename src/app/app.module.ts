import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MenuModule} from './menu/menu.module';
import { HomeComponent } from './home/home.component';
import { PvspComponent } from './1vs1/pvsp/pvsp.component';
import { ProfileComponent } from './users/profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { ClubesProComponent } from './clubes-pro/clubes-pro.component';
import { ReglamentoComponent } from './seccion-reglamento/reglamento/reglamento.component';
import { ClipsComponent } from './seccion-clips/clips/clips.component';
import { NoticiasComponent } from './seccion-noticias/noticias/noticias.component';
import {GallerizeModule} from "@ngx-gallery/gallerize";
import { GaleriaComponent } from './galeria/galeria.component';
import {GalleryModule} from "@ngx-gallery/core";
import { TablaGeneralComponent } from './tablas/tabla-general/tabla-general.component';
import {MatTableModule} from "@angular/material/table";
import { TablaTopComponent } from './tablas/tabla-top/tabla-top.component';
import { MenuLateralBuenoComponent } from './menu-lateral-bueno/menu-lateral-bueno.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {HttpClientModule} from "@angular/common/http";
import {UsersService} from "./services/users/users.service";
import { TablaUsuariosComponent } from './tablas/tabla-usuarios/tabla-usuarios.component';
import { RegisterComponent } from './login-registration/register/register.component';
import { LoginComponent } from './login-registration/login/login.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import { RegistrationSuccessComponent } from './login-registration/registration-success/registration-success.component';
import { MultipleUsersComponent } from './users/multiple-users/multiple-users.component';
import { FirstComponent } from './first/first.component';


// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PvspComponent,
    ProfileComponent,
    NotFoundComponent,
    ClubesProComponent,
    ReglamentoComponent,
    ClipsComponent,
    NoticiasComponent,
    GaleriaComponent,
    TablaGeneralComponent,
    TablaTopComponent,
    MenuLateralBuenoComponent,
    TablaUsuariosComponent,
    RegisterComponent,
    LoginComponent,
    RegistrationSuccessComponent,
    MultipleUsersComponent,
    FirstComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    GalleryModule,
    GallerizeModule,
    HttpClientModule,
    MatNativeDateModule,
    MenuModule,
    MatTableModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
