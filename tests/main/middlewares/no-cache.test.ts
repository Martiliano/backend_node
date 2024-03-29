import request from 'supertest';
import { noCache } from '../../../src/main/middlewares/no-cache';
import app from '../../../src/main/config/app';

describe('NoCache Middleware', () => {
  test('Should disable cache', async () => {
    app.get('/test_no_cache', noCache, (req, res) => {
      res.send();
    });
    await request(app)
      .get('/test_no_cache')
      .expect(
        'Cache-Control',
        'no-store, no-cache, must-revalidate, proxy-revalidate',
      )
      .expect('Pragma', 'no-cache')
      .expect('Expires', '0')
      .expect('Surrogate-Control', 'no-store');
  });
});
