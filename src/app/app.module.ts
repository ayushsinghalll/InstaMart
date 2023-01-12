import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutUSComponent } from './about-us/about-us.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import {AlertModule, CardModule, CarouselModule} from "@coreui/angular";
import {IconModule} from "@coreui/icons-angular";
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {ContactComponent} from "./contact/contact.component";

@NgModule({
  declarations: [
    AppComponent,
    AboutUSComponent,
    ContactComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    PagenotfoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    CarouselModule,
    AlertModule,
    IconModule,
    CardModule,
    MatCardModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
