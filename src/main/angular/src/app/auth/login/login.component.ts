import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, AbstractControl, FormGroup, FormControl } from '@angular/forms';
import { passwordValidator } from './validators/login.validator';
import { AuthService } from '../auth.service';
import { IUser } from '../user';
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
  get f(): FormGroup {
    return this.loginForm;
  }

  actions = [
    {
      icon: 'input',
      text: 'Login',
      style: 'raise'
    },
    {
      icon: 'input',
      text: 'Logout',
      style: 'raise'
    }
  ];

  constructor(private fb: FormBuilder,
    private _auth: AuthService) {
  }
  get auth() {
    return this._auth;
  }

  ngOnInit() {
     this.loginForm = this.fb.group({
       loginId: [null, [Validators.required,
         Validators.minLength(5),
         Validators.maxLength(7)
      ]],
       password: [null, [Validators.required,
         Validators.minLength(8),
        //  passwordValidator
        ]]
     });
  }

  login() {
    const myUser = this._auth.login(this.loginForm.controls['loginId'].value, this.loginForm.controls['password'].value);

    console.log(myUser);
    // .subscribe(()=>{
      // console.log("user is logged in");
      // this.router.navigateByUrl('/');
    // });
    console.log(this._auth.myUser());
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
  getControlName( control: FormControl ) {
    let controlName = null;
    const parent = control.parent;
    if ( parent instanceof FormGroup ) {
      Object.keys(parent.controls).forEach((key: string) => {
        if ( control === parent.controls[key] ) {
          controlName = key;
        }
      });
    }
    return controlName;
  }
  /**
   *
   * @param control Input Control
   */
  getError( control: FormControl ) {
    if ( control.errors ) {
      const err = control.errors;
      let key: string;
      let val: any;
      let message: string;
      for (const k in err) {
        if (err.hasOwnProperty(k)) {
          key = k;
          val = err[k];
          break;
        }
      }
      switch ( key ) {
        case 'required':
          message = '필수입력입니다.';
          break;
        case 'passwordPattern':
          message = '비밀번호는 대소문자, 영숫자 포함 8글자 이상입니다.';
          break;
        case 'minlength':
          message = '최소 ' + val.requiredLength + '를 입력하세요.' ;
          break;
        case 'maxlength':
          message = '최대 ' + val.requiredLength + '까지 가능합니다.(' + val.actualLength + ')';
          break;
        default:
          console.log('Error:' + key);
          console.log(val);
          break;
      }
      return message;
    }
  }
}
