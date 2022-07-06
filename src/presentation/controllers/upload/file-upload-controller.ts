import { File } from '../../../domain/models/file';
import { FileUpload } from '../../../domain/usecases/upload/upload';
import { HttpRequest, HttpResponse } from '../../protocols/http';
import { ServerError } from '../../errors/index';
import { ok, serverError } from '../../helpers/http/http-helper';
import { Controller } from '../../protocols/controller';

export class FileUploadController implements Controller {
  constructor(private readonly fileUpload: FileUpload) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    try {
      //const { files } = request.body as { files: File[] };
      const { files } = request as { files: File[] };
      const filesPaths = await this.fileUpload.upload(files);

      return ok(filesPaths);
    } catch (error) {
      return serverError(new ServerError(error));
    }
  }
}
