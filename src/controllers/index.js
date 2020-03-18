const router = require('express').Router();

const { notFound, serverError } = require('./error');

router.get('/server-error', (req, res) => {
	res.status(500).send('server error test');
});

router.use(notFound);
router.use(serverError);

module.exports = router;
