const joi = require('@hapi/joi');

// Here we tell joi what the req.body will have inside it
const validationObject = {
	username: joi
		.string() // username is a string
		.alphanum() // user name may contain numbers
		.min(2) // minimum length is 2
		.max(40), // maximum length is 40
	password: joi
		.string()
		.alphanum()
		.min(8)
		.pattern(new RegExp('^[a-zA-Z0-9]')),
	repeatPassword: joi.ref('password'), // reference for key password
	email: joi
		.string()
		.email({
			minDomainSegments: 2, // two separators (@ and .)
			tlds: { allow: ['com', 'net'] }, // domain.org will not work
		})
		.min(10),
};

// joi now can be used to validate the req.body
const schema = joi.object(validationObject);

// this is what express does
const req = {
	body: {
		username: 'Farah',
		password: 'a9neb2R',
		repeatPassword: '123',
		email: 'a@a.com',
	},
};

const { error, value } = schema.validate(req.body);

console.log(value);
console.log(error);
