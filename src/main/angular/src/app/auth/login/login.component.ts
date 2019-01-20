import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'pp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginIdFormControl = new FormControl('', [
    Validators.required
  ]);
  public passwordFormControl = new FormControl('', [
    Validators.required
  ]);
  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
