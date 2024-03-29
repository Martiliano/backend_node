import { forbidden, ok } from '../helpers/http/http-helper';
import { AccessDeniedError } from '../errors';
import { LoadAccountByToken } from '../../domain/usecases/account/account';
import { Middleware, HttpRequest, HttpResponse } from '../protocols';

export class AuthMiddleware implements Middleware {
  constructor(private readonly loadAccountByToken: LoadAccountByToken) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const accessToken = httpRequest.headers?.['x-access-token'];
      if (accessToken) {
        const account = await this.loadAccountByToken.load(accessToken);
        if (account) {
          return ok({ accountId: account.id });
        }
      }
      return forbidden(new AccessDeniedError());
    } catch (error) {
      return forbidden(new AccessDeniedError());
    }
  }
}
