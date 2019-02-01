import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MyMaterialModule } from '../my-material/my-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { RegisterComponent } from './register/register.component';
import { PpModule } from '../pp/pp.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LoginComponent,
    ChildComponent,
    RegisterComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,

    HttpClientModule,

    MyMaterialModule,
    PpModule
  ],
  exports: [
    LoginComponent, ChildComponent, RegisterComponent
  ]
})
export class AuthModule {

}
