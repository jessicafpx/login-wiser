import { Reducer } from 'redux';
import { IUserAuthState } from './types';

const INITIAL_STATE: IUserAuthState = {
  user: {
    password: '',
    email: ''
  },
};

const userAuth: Reducer<IUserAuthState> = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case 'ADD_USER_AUTH': {
      const { user } = action.payload;

      state.user = user;
      return state;
    }

    default: {
      return state;
    }
  }
};

export default userAuth;
