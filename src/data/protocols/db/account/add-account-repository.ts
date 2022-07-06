import { AccountModel, AccountModelInsert } from '../../../../domain/models/account';

export interface AddAccountRepository {
  add(accountData: AccountModelInsert): Promise<AccountModel>;
}
