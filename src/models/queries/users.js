const bcrypt = require('bcryptjs');
const connection = require('../database/db_connection');

const hashPassword = (plainPassword, callback) => {
	bcrypt.hash(plainPassword, 10, (err, hash) => {
		callback(err, hash);
	});
};

const storeUser = (reqBody) => {
	const { username, email, password } = reqBody;
	hashPassword(password, (err, hash) => {
		const sql = {
			text: 'INSERT INTO users(username,email,password) VALUES($1,$2,$3);',
			values: [username, email, hash],
		};
		connection.query(sql.text, sql.values, (error) => {
			if (error) throw error;
		});
	});
};
module.exports = storeUser;
