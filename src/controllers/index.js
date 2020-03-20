const router = require('express').Router();
const { notFound, serverError } = require('./error');
const signupController = require('./signup');
const loginController = require('./login');
const path = require('path');

router.get('/signup', (req, res) => {
	res.sendFile(path.join(__dirname, '..', '..', 'public', 'signup.html'));
});
router.post('/signup', signupController);
router.post('/login', loginController);

router.get('/user', (req, res) => {
	res.sendFile(path.join(__dirname, '..', '..', 'public', 'user.html'));
});

router.get('/server-error-test', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'public', 'signup.html'));
});

router.use(notFound);
router.use(serverError);

module.exports = router;
