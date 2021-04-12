import { IState } from 'src/app/store/initial-state.types';

export interface IAdminState {
  products: IState<any[]>;
}

export const adminInitialState: IAdminState = {
  products: {},
};
