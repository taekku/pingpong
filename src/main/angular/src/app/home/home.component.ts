import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'pp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _auth: AuthService) { }

  ngOnInit() {
  }

  public doJob() {
    if ( this._auth.loginUser ) {
      this._auth.loginUser().name = 'asf';
    }
  }
}
