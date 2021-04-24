process.env.NODE_ENV = 'test';
const expect = require('chai').expect;
const request = require('supertest');
const router = require('../routes/users/v1a')
const {describe} = require("mocha");

describe('GET /Users', () => {
    it('OK, getting users', (done) => {
        request(router).get('/v1a/users')
            .then(res => {
                expect(res.text).to.be.a('string');
                done()
            })
            .catch(error => done(error))
    })
})

describe('POST /User', () => {
    it('OK, creating a user', (done) => {
        request(router).post('/v1a/user/create')
            .send({
                "name" : "Awol",
                "dob": "4/23/2002",
                "smoke" : "smoker",
                "language": "B2",
                "nextavail": "4/23/2014",
                "status": "SELECTION"
            }, done())
            .then(res => {
                expect(res.text).to.be.a('string');
                done();
            })
            .catch(error => done(error))
    })
})
describe('PUT /User', () => {
    it('OK, update a user', (done) => {
        request(router).put('/v1a/user/update')
            .send({
                "id": 1,
                "name": "Trust",
                "dob": "4/23/2004",
                "smoke": "Non-smoker",
                "language": "B2",
                "nextavail": "4/23/2014",
                "status": "SELECTION"
            })
            .then(res => {
                expect(res.text).to.be.a('string');
                done();
            })
            .catch(error => {
                done(error)
            })
    })
})