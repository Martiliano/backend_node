/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { EmailValidator } from '../../validation/protocols';
import { Validation } from '../../presentation/protocols';
import { InvalidParamError } from '../../presentation/errors';

export class EmailValidation implements Validation {
  constructor(
    private readonly fieldName: string,
    private readonly emailValidator: EmailValidator,
  ) {}

  validate(input: any): Error {
    const isValid = this.emailValidator.isValid(input.body[this.fieldName]);
    if (!isValid) {
      return new InvalidParamError(this.fieldName);
    }
  }
}
