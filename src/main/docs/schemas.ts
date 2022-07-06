import {
  accountSchema,
  loginParamsSchema,
  errorSchema,
  signUpParamsSchema,
  badRequestSchema,
  validationSchema,
} from './schemas/';

export default {
  account: accountSchema,
  signUpParams: signUpParamsSchema,
  loginParams: loginParamsSchema,
  badRequest: badRequestSchema,
  validation: validationSchema,
  error: errorSchema,
};
