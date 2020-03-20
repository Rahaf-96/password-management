const tape = require('tape');
const supertest = require('supertest');
const app = require('../src/app');

tape('sign up test', (t) => {
	supertest(app)
		.post('/signup')
		.send({
			username: 'Rahaf',
			email: 'rahaf@rahaf.com',
			password: 'Rahaf123',
			verifiedPassword: 'Rahaf123',
		})
		.expect(200)
		.end((err, result) => {
			t.equal(result.status, 200, 'sign up successfuly');
			t.end();
		});
});

tape('invalid email when sign up test', (t) => {
	supertest(app)
		.post('/signup')
		.send({
			username: 'Rahaf',
			email: 'rahafrahaf.com',
			password: 'Rahaf123',
			verifiedPassword: 'Rahaf123',
		})
		.expect(400)
		.end((err, result) => {
			t.equal(result.status, 400, 'invalid email with error 400');
			t.end();
		});
});

tape('password and verified password test', (t) => {
	supertest(app)
		.post('/signup')
		.send({
			username: 'Rahaf',
			email: 'rahaf@rahaf.com',
			password: 'Rahaf123',
			verifiedPassword: 'Rahaf1234',
		})
		.expect(400)
		.end((err, result) => {
			t.equal(
				result.status,
				400,
				'password and verified password are different',
			);
			t.end();
		});
});

tape('invalid password test', (t) => {
	supertest(app)
		.post('/signup')
		.send({
			username: 'Rahaf',
			email: 'rahaf@rahaf.com',
			password: 'rahafrahaf',
			verifiedPassword: 'rahafrahaf',
		})
		.expect(400)
		.end((err, result) => {
			t.equal(
				result.status,
				400,
				'password doesnt have at least 1 uppercase, 1 lowercase character and 1 number',
			);
			t.end();
		});
});

tape('invalid password test', (t) => {
	supertest(app)
		.post('/signup')
		.send({
			username: 'Rahaf',
			email: 'rahaf@rahaf.com',
			password: 'Rahafrahaf',
			verifiedPassword: 'Rahafrahaf',
		})
		.expect(400)
		.end((err, result) => {
			t.equal(
				result.status,
				400,
				'password doesnt have at least 1 uppercase, 1 lowercase character and 1 number',
			);
			t.end();
		});
});

tape('invalid password test', (t) => {
	supertest(app)
		.post('/signup')
		.send({
			username: 'Rahaf',
			email: 'rahaf@rahaf.com',
			password: 'rahafrahaf1',
			verifiedPassword: 'rahafrahaf1',
		})
		.expect(400)
		.end((err, result) => {
			t.equal(
				result.status,
				400,
				'password doesnt have at least 1 uppercase, 1 lowercase character and 1 number',
			);
			t.end();
		});
});

tape('invalid password test', (t) => {
	supertest(app)
		.post('/signup')
		.send({
			username: 'Rahaf',
			email: 'rahaf@rahaf.com',
			password: 'RAHAFRAHAF',
			verifiedPassword: 'RAHAFRAHAF',
		})
		.expect(400)
		.end((err, result) => {
			t.equal(
				result.status,
				400,
				'password doesnt have at least 1 uppercase, 1 lowercase character and 1 number',
			);
			t.end();
		});
});

tape('invalid password test', (t) => {
	supertest(app)
		.post('/signup')
		.send({
			username: 'Rahaf',
			email: 'rahaf@rahaf.com',
			password: 'RAHAFRAHAF1',
			verifiedPassword: 'RAHAFRAHAF1',
		})
		.expect(400)
		.end((err, result) => {
			t.equal(
				result.status,
				400,
				'password doesnt have at least 1 uppercase, 1 lowercase character and 1 number',
			);
			t.end();
		});
});

tape('invalid password test', (t) => {
	supertest(app)
		.post('/signup')
		.send({
			username: 'Rahaf',
			email: 'rahaf@rahaf.com',
			password: '123456789',
			verifiedPassword: '123456789',
		})
		.expect(400)
		.end((err, result) => {
			t.equal(
				result.status,
				400,
				'password doesnt have at least 1 uppercase, 1 lowercase character and 1 number',
			);
			t.end();
		});
});

tape('invalid password length test', (t) => {
	supertest(app)
		.post('/signup')
		.send({
			username: 'Rahaf',
			email: 'rahaf@rahaf.com',
			password: 'Raha1',
			verifiedPassword: 'Raha1',
		})
		.expect(400)
		.end((err, result) => {
			t.equal(result.status, 400, 'password less than 6 characters');
			t.end();
		});
});
