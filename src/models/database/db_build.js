const fs = require('fs');
const path = require('path');
const connection = require('./db_connection');

const sql = fs.readFileSync(path.join(__dirname, 'db_build.sql')).toString();

const createTables = () => {
	connection.query(sql, (err) => {
		if (err) throw err;
	});
};

createTables();
module.exports = createTables;
