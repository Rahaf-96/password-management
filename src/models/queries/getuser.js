const connection = require('../database/db_connection');

const getUser = (reqbody, callback) => {
	const { email } = reqbody;

	const sql = {
		text: 'select * from users where email = $1;',
		values: [email],
	};

	connection.query(sql.text, sql.values, (err, res) => {
		if (err) throw err;
		else {
			callback(err, res.rows);
		}
	});
};

module.exports = getUser;
