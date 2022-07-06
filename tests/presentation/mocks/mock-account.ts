/* eslint-disable @typescript-eslint/no-unused-vars */
import faker from 'faker';
import {
  AccountModel,
  AccountModelInsert,
} from '../../../src/domain/models/account';
import {
  AddAccount,
  Authentication,
  AuthenticationModel,
  LoadAccountByToken,
} from '../../../src/domain/usecases/account/account';

export class AddAccountSpy implements AddAccount {
  account: AccountModelInsert;

  async add(account: AccountModelInsert): Promise<AccountModel> {
    this.account = account;

    const retorno: AccountModel = {
      id: 'any-id',
      name: 'any_name',
      email: 'any@email.com',
      password: 'any_password',
      role: ['any_role'],
      phone: '5554954871234',
      accessToken: ' ',
      createAt: new Date(2022, 6, 3, 10, 5, 0, 0),
      updateAt: new Date(2022, 6, 3, 10, 5, 0, 0),
    };
    return retorno;
  }
}

export class AuthenticationSpy implements Authentication {
  authentication: AuthenticationModel;

  async auth(authentication: AuthenticationModel): Promise<string> {
    this.authentication = authentication;
    return 'any_token';
  }
}

export class LoadAccountByTokenSpy implements LoadAccountByToken {
  async load(accessToken: string): Promise<AccountModel> {
    const retorno: AccountModel = {
      id: 'any-id',
      name: 'any_name',
      email: 'any@email.com',
      password: 'any_password',
      role: ['any_role'],
      phone: '5554954871234',
      accessToken: ' ',
      createAt: new Date(2022, 6, 3, 10, 5, 0, 0),
      updateAt: new Date(2022, 6, 3, 10, 5, 0, 0),
    };
    return retorno;
  }
}
