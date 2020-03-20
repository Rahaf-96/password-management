const tape = require('tape');
const supertest = require('supertest');
const app = require('../src/app');

// to make this test work you should sign up first
// use email: rahaf@rahaf.com & password: Rahaf123

tape('log in test', (t) => {
	supertest(app)
		.post('/login')
		.send({
			email: 'rahaf@rahaf.com',
			password: 'Rahaf123',
		})
		.expect(200)
		.end((err, result) => {
			t.equal(result.status, 200, 'logged in successfuly');
			t.end();
		});
});

tape('log in test', (t) => {
	supertest(app)
		.post('/login')
		.send({
			email: 'rahaf@rahafcom',
			password: 'Rahaf123',
		})
		.expect(400)
		.end((err, result) => {
			t.equal(result.status, 400, 'email or password is incorrect');
			t.end();
		});
});

tape('log in test', (t) => {
	supertest(app)
		.post('/login')
		.send({
			email: 'rahafrahaf@rahaf.com',
			password: 'Rahaf123',
		})
		.expect(400)
		.end((err, result) => {
			t.equal(result.status, 400, 'email or password is incorrect');
			t.end();
		});
});

tape('log in test', (t) => {
	supertest(app)
		.post('/login')
		.send({
			email: 'rahaf@rahaf.com',
			password: 'Rahaf123456',
		})
		.expect(400)
		.end((err, result) => {
			t.equal(result.status, 400, 'email or password is incorrect');
			t.end();
		});
});
