import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  theme = 'my-theme';
  title = 'angular';

  constructor(private overlayContainer: OverlayContainer) {

  }
  ngOnInit() {
    this.overlayContainer.getContainerElement().classList.add(this.theme);
  }
  onThemeChange(_$event) {
    // console.log("Here:" + this.theme);
    // this.overlayContainer.getContainerElement().classList.remove();
    // this.overlayContainer.getContainerElement().classList.add(this.theme);
    // if (this.theme === "my-themme") {
    //   this.overlayContainer.getContainerElement().classList.remove("my-second-theme");
    // } else {
    //   this.overlayContainer.getContainerElement().classList.remove("my-theme");
    // }
    const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
    const themeClassesToRemove = Array.from(overlayContainerClasses).filter((item: string) => item.includes('-theme'));
    if (themeClassesToRemove.length) {
      overlayContainerClasses.remove(...themeClassesToRemove);
    }
    overlayContainerClasses.add(this.theme);
  }
}
