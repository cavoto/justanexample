//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var server = require('../app');
chai.use(chaiHttp);
var expect = chai.expect;
describe('Simple api test', function () {
	/*
	  * Test the /GET route
	  */
	describe('/GET theUltimateAnswer', function () {
		it('it should GET the the answer to life the universe and everything', function (done) {
			chai.request(server)
				.get('/api/theUltimateAnswer')
				.end(function (err, res) {
					res.should.have.status(200);
					expect(res.body.is).to.equal(42);
					done();
				});
		});
	});
});