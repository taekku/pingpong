import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { myMaterialModule } from '../my-material/my-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [LoginComponent, ChildComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    myMaterialModule
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthModule { 

}
