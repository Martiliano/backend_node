export const testauthroutesPath = {
  post: {
    security: [
      {
        ApiKeyAuth: [],
      },
    ],
    tags: ['TestAuthRoutes'],
    summary: 'Criar um documento/linha na tabela/collection.',
    description:
      'Teste de rotas AUTENTICADAS. Essa rota só pode ser executada por **usuários autenticados**',
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
        ApiKeyAuth: [],
      },
    ],
    tags: ['TestAuthRoutes'],
    summary: 'Teste de rotas AUTENTICADAS',
    description:
      'Teste de rotas AUTENTICADAS. Essa rota só pode ser executada por **usuários autenticados**',
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/testauthroutes',
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
