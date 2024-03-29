import { SignUpController } from '../../../../../presentation/controllers/login/signup/signup-controller';
import { Controller } from '../../../../../presentation/protocols';
import { makeLogControllerDecorator } from '../../../decorators';
import { makeDbAddAccount } from '../../../usecases/account/db-add-account-factory';
import { makeDbAuthentication } from '../../../usecases/account/db-authentication-factory';
import { makeSignUpValidation } from './signup-validation-factory';

export const makeSignUpController = (): Controller => {
  const controller = new SignUpController(
    makeDbAddAccount(),
    makeSignUpValidation(),
    makeDbAuthentication(),
  );
  return makeLogControllerDecorator(controller);
};
