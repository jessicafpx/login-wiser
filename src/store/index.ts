import { createStore } from 'redux';
import rootReducer from './modules/rootReducer';
import { IUserAuthState } from './modules/userAuth/types';

export interface IState {
  userAuth: IUserAuthState;
}

const store = createStore(rootReducer);

export default store;
