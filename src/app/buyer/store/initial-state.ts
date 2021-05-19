import { IState } from 'src/app/store/initial-state.types';

export interface IBuyerState {
  cart: IState;
  product: IState;
}

export const buyerInitialState: IBuyerState = {
  cart: {},
  product: {},
};
