const request = require('supertest');
const server = require('./server');

describe('GET /', () => {

  // should return http 200 ok
  it('should terutn 200 http status code', () => {

   return request(server) // putting return will force async code to wait to be finished
      .get('/')
      .then( response => {
        expect(response.status).toBe(200)
      });

  });

  // should return JSON
  it('should return JSON', async () => {
    
    const response = await request(server).get('/');
    
    // toMatch uses a regex to check the value
    expect(response.type).toMatch(/json/i)
  })

  // should return an object with an api property with the value 'up'
  it('should return {api: "up"} ', async() => {
    
    const response = await request(server).get('/')

    // toEqual when checking objects and arrays bc of ref by memory
    expect(response.body).toEqual({api: 'up'});

  })
});