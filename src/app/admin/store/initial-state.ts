import { IState } from 'src/app/store/initial-state.types';

export interface IProductState {
  products: IState<any[]>;
  shops: IState<any[]>;
  singleProduct: IState<any>;
  singleShop: IState<any>;
  sidePanel: IState;
  sidePanelEntity: IState;
}

export const adminInitialState: IProductState = {
  products: {},
  shops: {},
  singleProduct: {},
  singleShop: {},
  sidePanel: {
    data: false,
  },
  sidePanelEntity: {
    data: null,
  },
};
