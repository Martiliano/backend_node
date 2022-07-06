/* eslint-disable @typescript-eslint/no-unused-vars */
import { MongoHelper } from '../../../../../src/infra/db/mongodb/helpers/mongo-helper';
import { AccountMongoRepository } from '../../../../../src/infra/db/mongodb/account/account-mongo-repository';

import { Collection, ObjectId } from 'mongodb';

let accountCollection: Collection;

describe('Account Mongo Repository', () => {
  test('teste', async () => {
    expect(true).toBe(true);
  });
});
