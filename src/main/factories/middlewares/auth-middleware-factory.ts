import { AuthMiddleware } from '../../../presentation/middlewares/auth-middleware';
import { Middleware } from '../../../presentation/protocols';
import { makeDbLoadAccountByToken } from '../usecases/account/db-load-account-by-token-factory';

export const makeAuthMiddleware = (): Middleware => {
  return new AuthMiddleware(makeDbLoadAccountByToken());
};
