import { File } from '../../domain/models/file';
import { Middleware } from '../protocols/middleware';
import { HttpRequest, HttpResponse } from '../protocols/http';
import { ok } from '../helpers/http/http-helper';

export class FileHandler implements Middleware {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    // console.log(
    //   'presentation/middlewares/file-handler httpRequest : ',
    //   httpRequest,
    // );
    const { files } = httpRequest;
    const { basefilename } = httpRequest.body;
    const { basefolder } = httpRequest.body;

    const mappedFiles: File[] = ((files as Express.Multer.File[]) || []).map(
      (file) => ({
        basefolder: basefolder ? basefolder : 'images/newscontent/',
        basename: basefilename
          ? basefilename
          : `${file.originalname.split('.').shift()}`,
        name: `${file.originalname.split('.').shift()}`, //file.originalname,
        type: file.mimetype,
        content: file.buffer,
        size: file.size,
        extension: `${file.originalname.split('.').pop()}`,
      }),
    );

    //Object.assign(httpRequest.body, { files: mappedFiles });

    return ok({ files: mappedFiles });
  }
}
