import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { CatalogueComponent } from './component/catalogue/catalogue.component';
import { ProfileComponent } from './component/profile/profile.component';
import { HeaderComponent } from './shared/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderconnectComponent } from './shared/headerconnect/headerconnect.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CatalogueComponent,
    ProfileComponent,
    HeaderComponent,
    HeaderconnectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
