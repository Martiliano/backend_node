import { Router } from 'express';
import multer from 'multer';

import { adaptRoute } from '../adapters/express/express-route-adapter';

import { makeFileUploadController } from '../factories/controllers/upload';

import { auth } from '../middlewares/auth';
import { fileupload } from '../middlewares/fileupload';

const upload = multer();

export default (router: Router): void => {
  router.post(
    '/upload',
    auth,
    upload.array('files', 5),
    fileupload,
    adaptRoute(makeFileUploadController()),
  );
};
