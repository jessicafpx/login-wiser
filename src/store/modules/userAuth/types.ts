export interface IUser {
  email: string;
  password: string;
}

export interface IUserAuthState {
  user: IUser;
}
