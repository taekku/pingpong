import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PpDynamicFormComponent } from './pp-dynamic-form/pp-dynamic-form.component';

@NgModule({
  declarations: [PpDynamicFormComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PpDynamicFormComponent
  ]
})
export class PpModule { }
