import { makeDbAuthentication } from '../../../usecases/account/db-authentication-factory';
import { makeLoginValidation } from './login-validation-factory';

import { Controller } from '../../../../../presentation/protocols';
import { LoginController } from '../../../../../presentation/controllers/login/login/login-controller';
import { makeLogControllerDecorator } from '../../../decorators';

export const makeLoginController = (): Controller => {
  const controller = new LoginController(
    makeDbAuthentication(),
    makeLoginValidation(),
  );
  return makeLogControllerDecorator(controller);
};
