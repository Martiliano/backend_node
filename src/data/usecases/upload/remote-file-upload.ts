import { File } from '../../../domain/models/file';
import { UploadedFile } from '../../../domain/models/uploaded-file';
import { FileUpload } from '../../../domain/usecases/upload/upload';
import { FileUploader } from '../../../data/protocols/upload/file-uploader';
import { FileUploadError } from '../../../presentation/errors/file-upload-error';

export class RemoteFileUpload implements FileUpload {
  constructor(private readonly fileUploader: FileUploader) {}
  //, private readonly directPublisher: DirectPublisher,

  async upload(files: File[]): Promise<UploadedFile[]> {
    const uploadedFiles = await this.fileUploader.upload(files);

    if (!uploadedFiles) {
      throw new FileUploadError();
    }

    return uploadedFiles as UploadedFile[];
  }
}
