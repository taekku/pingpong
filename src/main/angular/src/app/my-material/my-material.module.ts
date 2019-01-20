import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatSelectModule, MatFormFieldModule  } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    MatFormFieldModule 
  ]
})
export class myMaterialModule { 
  constructor(overlayContainer: OverlayContainer) {
    // overlayContainer.getContainerElement().classList.add('my-theme');
    // overlayContainer.getContainerElement().classList.add('my-second-theme');
  }
}
