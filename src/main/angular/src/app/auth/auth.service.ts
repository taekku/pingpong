import { Injectable } from '@angular/core';
import { IUser, User, BaseUser } from './user';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _user?: User;

  constructor(private http: HttpClient, private config: ConfigService) {
  }

  private getUser(login_id: string): User {
    const user: IUser = {
      id: 0,
      login_id: login_id,
      name: 'Taekgu' + login_id,
      fullName: 'Taekgu Lim' + login_id,
      token: 'myToken'
    };
    console.log('Login Id:' + login_id);
    return new BaseUser(user);
  }
  public login(val: { loginId: string, password: string } ): boolean {
    console.log(val);
    this._user = this.getUser(val.loginId);
    return true;
  }
  public myUser(): User {
    return this._user;
  }
  get user(): User {
    return this._user;
  }
}
