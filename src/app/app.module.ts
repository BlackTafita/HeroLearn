import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroCreateComponentComponent } from './hero-create-component/hero-create-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroService } from './services/hero.service';

import { AppRoutingModule }     from './app-routing';
@NgModule({
  declarations: [
    HeroesComponent,
    HeroCreateComponentComponent,
    AppComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
