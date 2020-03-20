const joi = require('@hapi/joi');
const storeData = require('../models/queries/users');
const emailExist = require('../models/queries/getuser');

const validationObject = {
	username: joi
		.string()
		.alphanum()
		.min(2)
		.max(40),
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
		.pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])')), //password should contain at least 1 uppercase and 1 lowercase character and at least one number
	verifiedPassword: joi.ref('password'), // reference for key password
};

const schema = joi.object(validationObject);

const signupValidate = (req, res) => {
	const { error, value } = schema.validate(req.body);
	if (error) res.status(400).json({ error });
	else {
		emailExist(value, (err, result) => {
			if (result.length !== 0) {
				res.status(200).json({
					message: 'email already exists',
				});
			} else {
				storeData(value);
				res.status(200).json({
					message: 'User created successfully',
					username: value.username,
				});
			}
		});
	}
};

module.exports = signupValidate;
