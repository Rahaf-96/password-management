const joi = require('@hapi/joi');
const getUser = require('../models/queries/getuser');
const bcrypt = require('bcryptjs');

const validationObject = {
	email: joi
		.string()
		.email({
			minDomainSegments: 2, // two separators (@ and .)
			tlds: { allow: ['com', 'net'] }, // domain.org will not work
		})
		.min(10),
	password: joi
		.string()
		.alphanum()
		.min(6)
		.pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])')),
};

const schema = joi.object(validationObject);

const loginValidate = (req, res) => {
	const { error, value } = schema.validate(req.body);
	if (error) res.status(400).json({ error });
	else {
		getUser(value, (error, result) => {
			if (result.length !== 0) {
				const plainPass = value.password;
				const hashedPass = result[0].password;
				bcrypt.compare(plainPass, hashedPass).then((compareResult) => {
					if (compareResult)
						res.status(200).json({ message: 'logged in successfully' });
					else {
						res.status(400).json({ message: 'you cant log in' });
					}
				});
			}
		});
	}
};

module.exports = loginValidate;
