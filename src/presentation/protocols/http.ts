/* eslint-disable @typescript-eslint/no-explicit-any */
export interface HttpResponse {
  statusCode: number;
  body: any;
}

export interface HttpRequest {
  body?: any;
  headers?: any;
  params?: any;
  query?: any;
  files?: any;
  accountId?: string;
}
