import { Controller } from '../../../../presentation/protocols';
import { FileUploadController } from '../../../../presentation/controllers/upload/file-upload-controller';
import { makeFileUpload } from '../../usecases/upload';

export const makeFileUploadController = (): Controller => {
  return new FileUploadController(makeFileUpload());
};
