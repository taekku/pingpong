import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, AbstractControl, FormGroup } from '@angular/forms';
import { passwordValidator } from './validators/login.validator';
import { AuthService } from '../auth.service';
import { _MatAutocompleteMixinBase } from '@angular/material';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
export interface Action {
  style: string;
  icon: string;
  text: string;
}
@Component({
  selector: 'pp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  get f(): {[key: string]: AbstractControl} {
    return this.loginForm.controls;
  }

  actions = [{
    icon: 'input',
    text: 'Login',
    style: 'raise'
  }];

  constructor(private fb: FormBuilder,
    private _auth: AuthService) {

  }
  get auth() {
    return this._auth;
  }

  ngOnInit() {
     this.loginForm = this.fb.group({
       loginId: [null, [Validators.required,
      ]],
       password: [null, [Validators.required, passwordValidator]]
     });
  }

  login() {
    console.log('I do Login!');
    console.log(this.loginForm.value);
  }
  doNothing() {
    console.log('do Nothing...');
  }
  doAction(action: Action) {
    switch (action.text) {
      case 'Login': this.login(); break;
      default: this.doNothing(); break;
    }
  }
}
