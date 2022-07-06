export class FileUploadError extends Error {
  constructor() {
    super('Erro ao tentar fazer o upload do arquivo');
    this.name = 'FileUploadError';
  }
}
