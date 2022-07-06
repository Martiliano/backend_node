/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Validation } from '../../presentation/protocols';
import { MissingParamError } from '../../presentation/errors';

export class RequiredFieldValidation implements Validation {
  constructor(private readonly fieldName: string) {}

  validate(input: any): Error {
    if (!input.body[this.fieldName]) {
      return new MissingParamError(this.fieldName);
    }
  }
}
