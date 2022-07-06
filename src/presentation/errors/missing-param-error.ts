export class MissingParamError extends Error {
  constructor(paramName: string) {
    super(`Parametro Faltando: ${paramName}`);
    this.name = 'MissingParamError';
  }
}
