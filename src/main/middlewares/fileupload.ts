import { adaptMiddleware } from '../adapters/express/express-middleware-adapter';

import { makeFileHandlerMiddleware } from '../factories/middlewares/upload-middleware-factory';

export const fileupload = adaptMiddleware(makeFileHandlerMiddleware());
