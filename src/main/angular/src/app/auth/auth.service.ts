import { Injectable } from '@angular/core';
import { IUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: IUser;

  constructor() {
    this.user = null;
  }

  private getUser(login_id: string): IUser {
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
  public login(val: { loginId: string, password: string } ): boolean {
    console.log(val);
    this.user = this.getUser(val.loginId);
    return true;
  }
  public loginUser(): IUser {
    const myUser = this.user;
    return myUser;
  }
}
