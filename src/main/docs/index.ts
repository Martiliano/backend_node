import paths from './paths';
import components from './components';
import schemas from './schemas';

export default {
  openapi: '3.0.0',
  info: {
    title: 'Boilerplate API',
    description:
      'API REST em NodeJs usando Typescript, Express, MongoDb, TDD, Clean Architecture, Design Patterns e princípios SOLID.',
    version: '0.1.0',
    contact: {
      name: 'Martiliano Rodrigo Panosso',
      url: 'https://yourdomain.com.br/',
    },
  },
  license: {
    name: 'Private',
    url: 'https://yourdomain.com.br/licenses',
  },
  servers: [
    {
      url: '/api',
    },
  ],
  tags: [
    {
      name: 'Login',
      description: 'APIs relacionadas a Login',
    },
  ],
  paths,
  schemas,
  components,
};
