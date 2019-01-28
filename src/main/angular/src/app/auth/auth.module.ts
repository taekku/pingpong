import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MyMaterialModule } from '../my-material/my-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { RegisterComponent } from './register/register.component';
import { MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule, MatCardModule } from '@angular/material';

@NgModule({
  declarations: [LoginComponent, ChildComponent, RegisterComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MyMaterialModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthModule {

}
