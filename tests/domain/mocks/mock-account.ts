import faker from 'faker';
import { AccountModelInsert } from '../../../src/domain/models/account';
import { AuthenticationModel } from '../../../src/domain/usecases/account/account';

export const mockAddAccountParams = (): AccountModelInsert => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  role: ['Developer'],
  phone: '5554987651234',
  createAt: new Date(),
  updateAt: new Date(),
});

export const mockAuthenticationParams = (): AuthenticationModel => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
});
