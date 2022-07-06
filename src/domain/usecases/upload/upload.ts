import { File } from '../../models/file';
import { UploadedFile } from '../../models/uploaded-file';

export interface FileUpload {
  upload: (files: File[]) => Promise<UploadedFile[]>;
}
