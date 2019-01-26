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
      fullName: 'Taekgu Lim'
    };
    return user;
  }

  get maxLoginIdLength(): number {
    return 5;
  }
  get minLoginIdLength(): number {
    return 5;
  }
}
