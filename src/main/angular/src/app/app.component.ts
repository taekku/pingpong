import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  theme = "my-theme";
  title = 'angular';

  constructor(private overlayContainer: OverlayContainer){

  }
  ngOnInit() {
    this.overlayContainer.getContainerElement().classList.add(this.theme);
  }
  onThemeChange() {
    console.log("Here:" + this.theme);
    // this.overlayContainer.getContainerElement().classList.remove();
    // this.overlayContainer.getContainerElement().classList.add(this.theme);
    console.log(this.overlayContainer.getContainerElement().classList);
  }
}
