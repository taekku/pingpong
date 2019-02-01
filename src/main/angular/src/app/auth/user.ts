import { isUndefined } from 'util';

export interface IUser {
  id: number;
  login_id: string;
  name: string;
  firstName?: string;
  lastName?: string;
  fullName: string;
  token?: string;
}

export abstract class User {

  abstract get id(): number;
  abstract get loginId(): string;
  abstract get name(): string;
  abstract get firstName(): string;
  abstract get lastName(): string;
  abstract get fullName(): string;
  abstract get token(): string;
}
export class BaseUser extends User {
  private _id: number;
  private _login_id: string;
  private _name: string;
  private _firstName?: string;
  private _lastName?: string;
  private _fullName: string;
  private _token?: string;
  constructor(private _user: IUser) {
    super();
    this._id = _user.id;
    this._login_id = _user.login_id;
    this._name = _user.name;
    this._firstName = _user.firstName;
    this._lastName = _user.lastName;
    this._fullName = _user.fullName;
    this._token = _user.token;
  }

  get id(): number { return this._id; }
  get loginId(): string { return this._login_id; }
  get name(): string { return this._name; }
  get firstName(): string { return this._firstName; }
  get lastName(): string { return this._lastName; }
  get fullName(): string { return this._fullName; }
  get token(): string { return this._token; }
}
