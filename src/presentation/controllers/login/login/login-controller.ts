import {
  Controller,
  HttpRequest,
  HttpResponse,
  Validation,
} from '../../../protocols';
import {
  badRequest,
  serverError,
  unauthorized,
  ok,
} from '../../../helpers/http/http-helper';
import { Authentication } from '../../../../domain/usecases/account/account';

export class LoginController implements Controller {
  constructor(
    private readonly authentication: Authentication,
    private readonly validation: Validation,
  ) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request);
      if (error) {
        return badRequest(error);
      }

      const { email, password } = request.body;
      const authenticationModel = await this.authentication.auth({
        email,
        password,
      });
      if (!authenticationModel) {
        return unauthorized();
      }

      return ok({ token: authenticationModel });
    } catch (error) {
      return serverError(error);
    }
  }
}
