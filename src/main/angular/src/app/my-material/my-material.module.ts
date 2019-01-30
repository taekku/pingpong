import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatSelectModule,
   MatFormFieldModule, MatInputModule, MatGridListModule, MatIconModule, MatMenuModule, MatTreeModule  } from '@angular/material';
import { OverlayContainer } from '@angular/cdk/overlay';

@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatGridListModule,
    MatMenuModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule
  ]
})
export class MyMaterialModule {
  constructor(overlayContainer: OverlayContainer) {
    // overlayContainer.getContainerElement().classList.add('my-theme');
    // overlayContainer.getContainerElement().classList.add('my-second-theme');
  }
}
