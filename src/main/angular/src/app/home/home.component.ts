import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ConfigService, Config } from '../config/config.service';

@Component({
  selector: 'pp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  error: any;
  config: Config;
  constructor(private _auth: AuthService, private configService: ConfigService) { }

  ngOnInit() {
  }

  public doJob() {
    if ( this._auth.myUser() ) {
      // this._auth.loginUser().name = 'asf';
    }
  }

  public showConfig() {
    this.configService.getConfig()
      .subscribe(
        (data: Config) => this.config = { ...data }, // success path
        error => this.error = error // error path
      );
  }

  public showConfig_v1() {
    this.configService.getConfig()
      .subscribe((data: Config) => this.config = {
        loginUrl: data['loginUrl'],
        textfile: data['textfile']
      });
  }
}
