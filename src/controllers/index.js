const router = require('express').Router();
const { notFound, serverError } = require('./error');
const signupController = require('./signup');

router.post('/signup', signupController);

router.use(notFound);
router.use(serverError);

module.exports = router;
