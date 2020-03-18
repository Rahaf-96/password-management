const joi = require('@hapi/joi');

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
		res.status(200).json({ message: 'logged in successfully' });
	}
};

module.exports = loginValidate;
