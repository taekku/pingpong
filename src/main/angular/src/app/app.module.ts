import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMaterialModule } from './my-material/my-material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { MenuLeftComponent } from './menu-left/menu-left.component';
import { MatTreeModule, MatIconModule, MatButtonModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { MenuHotComponent } from './menu-hot/menu-hot.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuLeftComponent,
    HomeComponent,
    MenuHotComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,

    MyMaterialModule,
    AuthModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
