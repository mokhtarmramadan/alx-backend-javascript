const request = require('supertest');
const { expect } = require('chai');
const app = require('../app'); // Adjust the path as necessary

describe('API integration test', function() {
  it('GET / returns correct response', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /text/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });
});

