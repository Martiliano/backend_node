import { AddAccountRepository } from '../../../../data/protocols/db/account/add-account-repository';
import {
  AccountModel,
  AccountModelInsert,
} from '../../../../domain/models/account';
import { MongoHelper } from '../helpers/mongo-helper';
import { UpdateAccessTokenRepository } from '../../../../data/protocols/db/account/update-access-token-repository';
import { UpdateAccountRepository } from '../../../../data/protocols/db/account/update-account-repository';
import { ObjectId } from 'mongodb';
import { LoadAccountByAccountIdRepository } from '../../../../data/protocols/db/account/load-account-by-account-id-repository';

export class AccountMongoRepository
  implements
    AddAccountRepository,
    UpdateAccessTokenRepository,
    UpdateAccountRepository,
    LoadAccountByAccountIdRepository
{
  async add(accountData: AccountModelInsert): Promise<AccountModel> {
    const accountCollection = await MongoHelper.getCollection('accounts');

    const accountUser: AccountModelInsert = {
      name: accountData.name,
      email: accountData.email,
      password: accountData.password,
      phone: accountData.phone,
      role: accountData.role,
      createAt: new Date(),
      updateAt: new Date(),
    };

    const result = await accountCollection.insertOne(accountUser);
    return MongoHelper.map(result.insertedId);
  }

  async loadByEmail(email: string): Promise<AccountModel> {
    const accountCollection = await MongoHelper.getCollection('accounts');
    const account = await accountCollection.findOne({ email });
    return account && MongoHelper.map(account);
  }

  async updateAccessToken(id: string, token: string): Promise<void> {
    const accountCollection = await MongoHelper.getCollection('accounts');
    await accountCollection.updateOne(
      {
        _id: new ObjectId(id),
      },
      {
        $set: {
          accessToken: token,
        },
      },
    );
  }

  async loadByToken(token: string): Promise<AccountModel> {
    const accountCollection = await MongoHelper.getCollection('accounts');
    const account = await accountCollection.findOne({ accessToken: token });
    return account && MongoHelper.map(account);
  }

  async updateTotalBalance(id: string, value: number): Promise<void> {
    const accountCollection = await MongoHelper.getCollection('accounts');
    await accountCollection.updateOne(
      {
        _id: new ObjectId(id),
      },
      {
        $inc: {
          totalBalance: value,
        },
      },
    );
  }

  async loadByAccountId(accountId: string): Promise<AccountModel> {
    const accountCollection = await MongoHelper.getCollection('accounts');
    const account = await accountCollection.findOne({
      _id: new ObjectId(accountId),
    });
    return account && MongoHelper.map(account);
  }
}
