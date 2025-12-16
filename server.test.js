const request = require('supertest');
const app = require('./server');

describe('Test Rapide', () => {
  it('Doit repondre avec succes', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });
});
