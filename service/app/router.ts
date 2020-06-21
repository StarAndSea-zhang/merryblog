import { Application } from 'egg';
import defaultRequire from './router/default';
import adminRequire from './router/admin';

export default (app: Application) => {
  defaultRequire(app);
  adminRequire(app)
};
