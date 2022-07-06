import {
  AccountModel,
  AccountModelInsert,
} from '../../../domain/models/account';
import { AddAccount } from '../../../domain/usecases/account/account';
import { Hasher } from '../../protocols/criptography/hasher';
import { AddAccountRepository } from '../../protocols/db/account/add-account-repository';
import { LoadAccountByEmailRepository } from '../../protocols/db/account/load-account-by-email-repository';

export class DbAddAccount implements AddAccount {
  constructor(
    private readonly hasher: Hasher,
    private readonly addAccountRepository: AddAccountRepository,
    private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository,
  ) {}

  async add(accountData: AccountModelInsert): Promise<AccountModel> {
    const account = await this.loadAccountByEmailRepository.loadByEmail(
      accountData.email,
    );
    if (!account) {
      const hashedPassword = await this.hasher.hash(accountData.password);
      const newAccount = await this.addAccountRepository.add(
        Object.assign({}, accountData, { password: hashedPassword }),
      );
      return newAccount;
    }
    return null;
  }
}
