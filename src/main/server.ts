/* eslint-disable @typescript-eslint/no-unused-vars */
import { PROCESS_ENVIROMENT } from './initenv';
import { MongoHelper } from '../infra/db/mongodb/helpers/mongo-helper';
import env from './config/env';

MongoHelper.connect(env.mongoUrl)
  .then(async () => {
    const app = (await import('./config/app')).default;
    //console.log('AMBIENTE: ', process.env);
    PROCESS_ENVIROMENT.MONGO_URL
      ? console.log('Ambiente configurado com sucesso')
      : console.log('Erro na configuracao do ambiente');
    app.listen(env.port, () =>
      console.log(`Server running at http://localhost:${env.port}`),
    );
  })
  .catch(console.error);
