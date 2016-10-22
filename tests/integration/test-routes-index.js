var supertest = require('supertest');
var app = require('../../app');

exports.home_should_return_200 = function(done){
  supertest(app)
    .get('/')
    .expect(200)
    .end(done);
};

exports.about_should_return_200 = function(done){
  supertest(app)
    .get('/about')
    .expect(200)
    .end(done);
};