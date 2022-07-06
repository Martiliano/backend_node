export const testfreeroutesPath = {
  post: {
    security: [
      {
        ApiKeyFree: [],
      },
    ],
    tags: ['TestFreeRoutes'],
    summary: 'Criar um documento/linha na tabela/collection.',
    description: 'Teste de rotas NAO AUTENTICADAS',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/categoryParams',
          },
        },
      },
    },
    responses: {
      204: {
        description: 'Sucesso, mas sem dados para exibir',
      },
      400: {
        $ref: '#/components/badRequest',
      },
      403: {
        $ref: '#/components/forbidden',
      },
      404: {
        $ref: '#/components/notFound',
      },
      500: {
        $ref: '#/components/serverError',
      },
    },
  },
  get: {
    security: [
      {
        ApiKeyFree: [],
      },
    ],
    tags: ['TestFreeRoutes'],
    summary: 'Teste de rotas NAO AUTENTICADAS',
    description: 'Teste de rotas NAO AUTENTICADAS.',
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/testfreeroutes',
            },
          },
        },
      },
      204: {
        description: 'Sucesso, mas sem dados para exibir',
      },
      403: {
        $ref: '#/components/forbidden',
      },
      404: {
        $ref: '#/components/notFound',
      },
      500: {
        $ref: '#/components/serverError',
      },
    },
  },
};
