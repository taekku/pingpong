import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Config {
  loginUrl: string;
  textfile: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  configUrl = 'http://localhost:8081/config/auth';

  constructor(private http: HttpClient) { }

  getConfig() {
    // return this.http.get(this.configUrl); // , param: { search: 'mySearch' });
    return this.http.post(this.configUrl, { search: 'mySearch' });
  }

  getLoginUrl() {
    const config = this.getConfig();
    let url;
    config.subscribe(
      (data: Config) => url = data.loginUrl
    );
    return url;
  }
}
