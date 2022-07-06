import { FileUpload } from '../../../../domain/usecases/upload/upload';
import { RemoteFileUpload } from '../../../../data/usecases/upload/remote-file-upload';
import { ServerFileUploader } from '../../../../infra/upload/file-uploader';

export const makeFileUpload = (): FileUpload => {
  const serverFileUploader = new ServerFileUploader();
  return new RemoteFileUpload(serverFileUploader);
};
