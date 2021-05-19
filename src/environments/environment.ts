import { IEnvironment } from './environment.interface';

export const environment: IEnvironment = {
  production: false,
  products: 'http://localhost:5002/api/v1',
  buyer: 'http://localhost:5000/api',
  shops: 'http://localhost:5004/api/v1',
  auth: 'http://localhost:58776/api',
};
