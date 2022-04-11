import { RouterModule } from '@angular/router';
import { ServiceComponent } from './service/service.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [
    AppComponent , ServiceComponent, ServicesComponent, NavbarComponent, CategoryComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'category', component:CategoryComponent},
      {path:'', redirectTo:'category', pathMatch: 'full'},
      {path:'**', redirectTo:'category', pathMatch: 'full'},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
