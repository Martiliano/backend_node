/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Controller } from '../../../presentation/protocols';
import { HttpRequest } from '../../../presentation/protocols';

import { Request, Response } from 'express';

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const request: HttpRequest = {
      body: req.body,
      params: req.params,
      query: req.query,
      accountId: req.accountId,
      files: req.files ? req.files : undefined,
    };

    const httpResponse = await controller.handle(request);

    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      res.status(httpResponse.statusCode).json(httpResponse.body);
    } else {
      res.status(httpResponse.statusCode).json({
        error: httpResponse.body.message,
      });
    }
  };
};
