interface IUser {
  getLoginId(): string;
}

class User implements IUser {
  constructor(private _loginId: string, password: string) {

  }
  public getLoginId(): string {
    return this._loginId;
  }
  get loginId(): string{
    return this._loginId;
  }
}

let user: IUser = new User("tglim", "myPassword");


console.log(user.getLoginId());

