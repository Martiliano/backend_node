/* eslint-disable @typescript-eslint/no-unused-vars */
import { SignUpController } from '../../../../../src/presentation/controllers/login/signup/signup-controller';
import {
  MissingParamError,
  ServerError,
  EmailInUseError,
} from '../../../../../src/presentation/errors';
import {
  ok,
  serverError,
  badRequest,
  forbidden,
} from '../../../../../src/presentation/helpers/http/http-helper';
import {
  AuthenticationSpy,
  ValidationSpy,
  AddAccountSpy,
} from '../../../mocks';
import { throwError } from '../../../../domain/mocks/test-helpers';
import {
  HttpRequest,
  HttpResponse,
} from '../../../../../src/presentation/protocols';

import faker from 'faker';

const mockRequest = (): HttpRequest => {
  const password = faker.internet.password();
  return {
    body: {
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: password,
      role: 'Test',
      phone: faker.phone.phoneNumber(),
    },
  };
};

type SutTypes = {
  sut: SignUpController;
  addAccountSpy: AddAccountSpy;
  validationSpy: ValidationSpy;
  authenticationSpy: AuthenticationSpy;
};

const makeSut = (): SutTypes => {
  const authenticationSpy = new AuthenticationSpy();
  const addAccountSpy = new AddAccountSpy();
  const validationSpy = new ValidationSpy();
  const sut = new SignUpController(
    addAccountSpy,
    validationSpy,
    authenticationSpy,
  );
  return {
    sut,
    addAccountSpy,
    validationSpy,
    authenticationSpy,
  };
};

describe('SignUp Controller', () => {
  test('Should return 500 if AddAccount throws', async () => {
    const { sut, addAccountSpy } = makeSut();
    jest.spyOn(addAccountSpy, 'add').mockImplementationOnce(throwError);
    const httpResponse = await sut.handle(mockRequest());
    expect(httpResponse).toEqual(serverError(new ServerError(null)));
  });

  test('Should call AddAccount with correct values', async () => {
    const { sut, addAccountSpy } = makeSut();
    const request = mockRequest();
    await sut.handle(request);
    const createAt = addAccountSpy.account.createAt;
    const updateAt = addAccountSpy.account.updateAt;
    expect(addAccountSpy.account).toEqual({
      name: request.body.name,
      email: request.body.email,
      password: request.body.password,
      role: request.body.role,
      phone: request.body.phone,
      createAt: createAt,
      updateAt: updateAt,
    });
  });

  test('Should return 200 if valid data is provided', async () => {
    const { sut, authenticationSpy } = makeSut();
    const httpResponse = await sut.handle(mockRequest());
    expect(httpResponse).toEqual(ok('any_token'));
  });

  test('Should call Validation with correct value', async () => {
    const { sut, validationSpy } = makeSut();
    const request = mockRequest();
    await sut.handle(request);
    expect(validationSpy.input).toEqual(request);
  });

  test('Should return 400 if Validation returns an error', async () => {
    const { sut, validationSpy } = makeSut();
    validationSpy.error = new MissingParamError(faker.random.word());
    const httpResponse = await sut.handle(mockRequest());
    expect(httpResponse).toEqual(badRequest(validationSpy.error));
  });

  test('Should call Authentication with correct values', async () => {
    const { sut, authenticationSpy } = makeSut();
    const request = mockRequest();
    const response = await sut.handle(request);
    expect(response.body).toEqual('any_token');
  });

  test('Should return 500 if Authentication throws', async () => {
    const { sut, authenticationSpy } = makeSut();
    jest.spyOn(authenticationSpy, 'auth').mockImplementationOnce(throwError);
    const httpResponse = await sut.handle(mockRequest());
    expect(httpResponse).toEqual(serverError(new Error()));
  });
});
