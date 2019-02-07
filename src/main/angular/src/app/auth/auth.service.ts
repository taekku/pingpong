import { Injectable } from '@angular/core';
import { IUser, User, BaseUser } from './user';
import { HttpClient } from '@angular/common/http';
import { ConfigService, Config } from '../config/config.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  private _user?: User;

  private _error: any;
  private _config: Config;

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  /**
   * Login처리
   * @param login_id Login Id
   */
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

  login(username: string, password: string) {
    return this.http.post<any>(`${config.apiUrl}/users/authenticate`, { username, password })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }

        return user;
      }));
  }
  
  public login2(val: { loginId: string, password: string } ): boolean {
    if ( !this._config ) {
      console.log('Wow:');
      this.configService.getConfig()
        .subscribe(
          (data: Config) => this._config = { ...data }, // success path
          error => this._error = error // error path
        );
    }
    console.log(val);
    console.log(this._config);
    console.log(this.configService.getLoginUrl());
    this._user = this.getUser(val.loginId);
    return true;
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  public myUser(): User {
    return this._user;
  }
  get user(): User {
    return this._user;
  }
}
