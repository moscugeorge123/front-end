import { IState } from 'src/app/store/initial-state.types';

export interface IProductState {
  products: IState<any[]>;
  singleProduct: IState<any>;
  sidePanel: IState;
  sidePanelProduct: IState;
}

export const adminInitialState: IProductState = {
  products: {},
  singleProduct: {},
  sidePanel: {
    data: false,
  },
  sidePanelProduct: {
    data: null,
  },
};
