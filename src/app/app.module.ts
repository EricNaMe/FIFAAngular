import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MenuModule} from './menu/menu.module';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import { PvspComponent } from './1vs1/pvsp/pvsp.component';
import { ProfileComponent } from './users/profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ClubesProComponent } from './clubes-pro/clubes-pro.component';
import { ReglamentoComponent } from './seccion-reglamento/reglamento/reglamento.component';
import { ClipsComponent } from './seccion-clips/clips/clips.component';
import { NoticiasComponent } from './seccion-noticias/noticias/noticias.component';


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
    NoticiasComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MenuModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: '1vs1', component: PvspComponent},
      { path: 'profile/:id', component: ProfileComponent},
      { path: 'clubespro', component: ClubesProComponent},
      { path: 'reglamento', component: ReglamentoComponent},
      { path: 'clips', component: ClipsComponent},
      { path: 'noticias', component: NoticiasComponent},
      { path: '**', component: NotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
