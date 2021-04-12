import { IState } from 'src/app/store/initial-state.types';

export interface IAuthState {
  login: IState;
  register: IState;
}

export const authInitialState: IAuthState = {
  login: {
    loading: false,
  },
  register: {
    loading: false,
  },
};
