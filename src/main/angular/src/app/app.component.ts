import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { User } from './auth/user';
import { AuthService } from './auth/auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  theme = 'my-theme';
  themes = ['my-theme', 'my-second-theme'];
  title = 'angular';

  constructor(private overlayContainer: OverlayContainer,
    private _auth: AuthService
    ) {

  }
  get loginUser(): User {
    return this._auth.loginUser();
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
