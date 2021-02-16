import { IUser } from "./types";

export function addUserAuth(user: IUser) {
  return {
    type: 'ADD_USER_AUTH',
    payload: {
      user,
    }
  };
};
