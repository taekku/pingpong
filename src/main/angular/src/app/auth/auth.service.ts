import { Injectable } from '@angular/core';
import { IUser, User, BaseUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: User;

  constructor() {
    this.user = null;
  }

  private getUser(login_id: string): User {
    const user: IUser = {
      id: 0,
      login_id: 'taekgu',
      name: 'Taekgu',
      fullName: 'Taekgu Lim',
      token: 'myToken'
    };
    console.log('Login Id:' + login_id);
    return new BaseUser(user);
  }
  public login(val: { loginId: string, password: string } ): boolean {
    console.log(val);
    this.user = this.getUser(val.loginId);
    return true;
  }
  public loginUser(): User {
    return this.user;
  }
}
