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
