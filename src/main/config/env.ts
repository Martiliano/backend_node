// AS CONFIGURAÇÕES DE PORTA E DIRETORIO RAIZ ESTA NO ARQUIVO .env NA RAIZ DO PROJETO
// O ARQUIVO .env DEVE SER CONFIGURADO CONFORME O SERVIDOR ONDE O PROJETO SERÁ INSTALADO

export default {
  mongoUrl:
    process.env.MONGO_URL || 'mongodb://localhost:27017/backendnode-api',
  port: process.env.PORT || 5050,
  jwtSecret:
    process.env.JWT_SECRET || 'xmnvjd89375fnjdv=çAx*~4fjkei9890gjrkgjcmvnsk',
  baseDir: process.env.BASE_DIR || '/your-path/backend_node',
};
