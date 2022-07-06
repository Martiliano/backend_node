import fs from 'fs';

import env from '../../main/config/env';
import slugify from '../slugfy';

import { FileUploader } from '../../data/protocols/upload/file-uploader';
import { File } from '../../domain/models/file';
import { UploadedFile } from '../../domain/models/uploaded-file';

export class ServerFileUploader implements FileUploader {
  private async uploadFile(file: File, order: number): Promise<UploadedFile> {
    const imageExtension = file.extension;

    const baseimagename = slugify(file.basename) + order;

    let imagename = baseimagename + '.' + imageExtension;
    let index = 1;
    let testeImageName = env.baseDir + '/public/' + file.basefolder + imagename;

    while (true) {
      if (!fs.existsSync(testeImageName)) {
        break;
      }

      imagename = baseimagename + '-' + index + '.' + imageExtension;
      testeImageName = env.baseDir + '/public/' + file.basefolder + imagename;
      index++;
    }

    const buffer = Buffer.from(file.content);
    fs.writeFileSync(testeImageName, buffer);

    return {
      path: env.baseDir + '/public/' + file.basefolder,
      name: imagename,
      url: '/public/' + file.basefolder + imagename,
    };
  }

  async upload(
    files: File | File[],
  ): Promise<UploadedFile | UploadedFile[] | undefined> {
    try {
      if (Array.isArray(files)) {
        const uploadResult = await Promise.all(
          files.map(async (file, index) => this.uploadFile(file, index)),
        );
        return uploadResult;
      }

      return await this.uploadFile(files, 0);
    } catch (error) {
      console.log('Upload Error: ', error);
    }
    return undefined;
  }
}
