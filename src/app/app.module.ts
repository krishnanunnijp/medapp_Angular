import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { PharmasistComponent } from './pharmasist/pharmasist.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { PharmaLoginComponent } from './pharma-login/pharma-login.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component'


const myRoute:Routes=[
  {
    path:"",
    component:AdminLoginComponent

  },{
    path:"pharm",
    component:PharmasistComponent

  },{
    path:"search",
    component:SearchEmployeeComponent

  },{
    path:"pharmalogin",
    component:PharmaLoginComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    PharmasistComponent,
    SearchEmployeeComponent,
    PharmaLoginComponent,
    AdminNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
