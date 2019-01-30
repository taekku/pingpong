import { Injectable } from '@angular/core';
import { IUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor() {
  }

  public getUser(login_id: string): IUser {
    const user: IUser = {
      id: 0,
      login_id: 'taekgu',
      name: 'Taekgu',
      fullName: 'Taekgu Lim',
      token: 'myToken'
    };
    console.log('Login Id:' + login_id);
    return user;
  }
  public login(val: { loginId: string, password: string } ): IUser {
    console.log(val);
    return this.getUser(val.loginId);
  }
}
