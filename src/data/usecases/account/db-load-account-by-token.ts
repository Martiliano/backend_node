import { AccountModel } from '../../../domain/models/account';
import { LoadAccountByToken } from '../../../domain/usecases/account/account';
import { Decrypter } from '../../protocols/criptography/decrypter';
import { LoadAccountByTokenRepository } from '../../protocols/db/account/load-account-by-token-repository';

export class DbLoadAccountByToken implements LoadAccountByToken {
  constructor(
    private readonly decrypter: Decrypter,
    private readonly loadAccountByTokenRepository: LoadAccountByTokenRepository,
  ) {}

  async load(accessToken: string): Promise<AccountModel> {
    const token = await this.decrypter.decrypt(accessToken);
    if (token) {
      const account = await this.loadAccountByTokenRepository.loadByToken(
        accessToken,
      );
      if (account) {
        return account;
      }
    }
    return null;
  }
}
