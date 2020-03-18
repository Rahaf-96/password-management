const bcrypt = require('bcryptjs');
const connection = require('../database/db_connection');

const hashPassword = (plainPassword, callback) => {
	bcrypt.hash(plainPassword, 10, (err, hash) => {
		callback(err, hash);
	});
};

const storeUser = (reqBody) => {
	console.log(reqBody);
	const { username, email, password, verifiedPassword } = reqBody;
	hashPassword(password, (err, hash) => {
		hashPassword(verifiedPassword, (err, hash2) => {
			const sql = {
				text:
					'INSERT INTO users(username,email,password,verifiedPassword) VALUES($1,$2,$3,$4);',
				values: [username, email, hash, hash2],
			};
			connection.query(sql.text, sql.values, (error) => {
				if (error) throw error;
			});
		});
	});
};
module.exports = storeUser;
