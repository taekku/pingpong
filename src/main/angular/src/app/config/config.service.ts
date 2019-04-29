import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { SELECT_PANEL_INDENT_PADDING_X } from '@angular/material';

export interface Config {
  loginUrl: string;
  textfile: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  configUrl = 'http://localhost:8081/config/auth';
  loginUrl: string;
  textfile: string;

  constructor(private http: HttpClient) {
    /*his.getConfig().toPromise().then(
      (data: Config) => {
        this.loginUrl = data.loginUrl;
        this.textfile = data.textfile;
      }
    );*/
   }

  getConfig() {
    console.log('Hi config service');
    // return this.http.get(this.configUrl); // , param: { search: 'mySearch' });
    return this.http.post(this.configUrl, { search: 'mySearch' });
  }

  getLoginUrl() {
    console.log('getLoginUrl:' + this.loginUrl);
    if ( !this.loginUrl ) {
      this.getConfig().toPromise().then(
        (data: Config) => {
          console.log(data);
          this.loginUrl = data.loginUrl;
          this.textfile = data.textfile;
          console.log('is toPromise!!111');
        }
      );
    }
    console.log('final getLoginUrl:' + this.loginUrl);
    return this.loginUrl;
  }
}
