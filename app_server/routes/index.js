const express = require('express');
const router = express.Router();
const locationsController = require('../controllers/locations');
const othersController = require('../controllers/others');

// location pages
router.get('/', locationsController.homelist);
router.get('/location', locationsController.locationInfo);
router.get('/location/review/new', locationsController.addReview);

// other pages
router.get('/about', othersController.about);

module.exports = router;
