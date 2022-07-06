/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Validation } from '../../../src/presentation/protocols';

export class ValidationSpy implements Validation {
  error: Error = null;
  input: any;

  validate(input: any): Error {
    this.input = input;
    return this.error;
  }
}
