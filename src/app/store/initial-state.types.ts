export interface IState<C = any, E = any> {
  loading?: boolean;
  data?: C;
  error?: E;
}
