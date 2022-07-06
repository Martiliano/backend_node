import {
  Controller,
  HttpRequest,
  HttpResponse,
  Validation,
} from '../../../../../src/presentation/protocols';
import {
  badRequest,
  serverError,
  ok,
  forbidden,
} from '../../../../../src/presentation/helpers/http/http-helper';

import { EmailInUseError } from '../../../../../src/presentation/errors';
import {
  AddAccount,
  Authentication,
} from '../../../../../src/domain/usecases/account/account';

export class SignUpController implements Controller {
  constructor(
    private readonly addAccount: AddAccount,
    private readonly validation: Validation,
    private readonly authentication: Authentication,
  ) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request);

      if (error) {
        return badRequest(error);
      }

      const { name, email, password, role, phone } = request.body;
      const createAt = new Date();
      const updateAt = new Date();
      const isValid = await this.addAccount.add({
        name,
        email,
        password,
        role,
        phone,
        createAt,
        updateAt,
      });
      if (!isValid) {
        return forbidden(new EmailInUseError());
      }
      const authenticationModel = await this.authentication.auth({
        email,
        password,
      });
      return ok(authenticationModel);
    } catch (error) {
      return serverError(error);
    }
  }
}
