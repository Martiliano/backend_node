import { UploadedFile } from '../../../domain/models/uploaded-file';
import { File } from '../../../domain/models/file';

export interface FileUploader {
  upload: (
    files: File | File[],
  ) => Promise<UploadedFile | UploadedFile[] | undefined>;
}
