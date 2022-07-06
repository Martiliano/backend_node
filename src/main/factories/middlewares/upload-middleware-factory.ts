import { Middleware } from '../../../presentation/protocols';
import { FileHandler } from '../../../presentation/middlewares/file-handler';

export const makeFileHandlerMiddleware = (): Middleware => {
  return new FileHandler();
};
