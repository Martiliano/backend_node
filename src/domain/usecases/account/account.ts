import { AccountModel, AccountModelInsert } from '../../models/account';

export interface AddAccount {
  add(account: AccountModelInsert): Promise<AccountModel>;
}

export interface AuthenticationModel {
  email: string;
  password: string;
}

export interface Authentication {
  auth(authentication: AuthenticationModel): Promise<string>;
}

export interface LoadAccountByToken {
  load(accessToken: string): Promise<AccountModel>;
}
