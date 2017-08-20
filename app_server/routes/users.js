const express = require('express');
const router = express.Router();

const usersController = (req, res, next) => {
	res.send('respond with a resource');
}

/* GET users listing. */
router.get('/', usersController);

module.exports = router;
