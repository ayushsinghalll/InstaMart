import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutUSComponent } from './about-us/about-us.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
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
import {HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {Inmemoryeventdbservice} from "./inmemoryeventdbservice";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {AppEffects} from "./app.effects";
import { CartComponent } from './cart/cart.component';
import {FilterPipe} from "./service/filter.pipe";
import {AdminModule} from "./admin/admin.module";
import { CheckoutComponent } from './checkout/checkout.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  declarations: [
    AppComponent,
    AboutUSComponent,
    ContactComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    PagenotfoundComponent,
    CartComponent,
    FilterPipe,
    CheckoutComponent,

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
    MatSelectModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(Inmemoryeventdbservice),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument(),
    AdminModule,
    MatSnackBarModule,

  ],
  providers: [MatSnackBarModule,],
  bootstrap: [AppComponent]
})
export class AppModule { }
