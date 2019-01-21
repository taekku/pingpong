import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
export interface Action {
  style: string,
  icon: string,
  text: string
}
@Component({
  selector: 'pp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    loginId: [null, Validators.required],
    password: [null, Validators.required]
  });
  actions = [{
    icon: 'input',
    text: 'Login',
    style: 'raise'
  }];

  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  login(){
    console.log(this.loginForm.value);
  }
  doNothing(){
    console.log("do Nothing...");
  }
  doAction(action:Action){
    switch(action.text){
      case "Login": this.login(); break;
      default: this.doNothing(); break;
    }
  }
}
