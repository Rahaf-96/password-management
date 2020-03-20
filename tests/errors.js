const tape = require('tape');
const supertest = require('supertest');
const app = require('../src/app');

tape('test 404 error', (t) => {
	supertest(app)
		.get('/notfound')
		.expect(404)
		.end((err, result) => {
			t.equal(result.status, 404, 'the page not found 404 error');
			t.end();
		});
});

tape('test 500 error', (t) => {
	supertest(app)
		.get('/server-error-test')
		.expect(500)
		.end((err, result) => {
			t.equal(result.status, 500, 'the page has server error 500');
			t.end();
		});
});
