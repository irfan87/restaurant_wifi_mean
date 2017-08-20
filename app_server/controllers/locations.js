module.exports.homelist = (req, res) => {
	res.render('locations-list', {
		title: 'Home'
	});
}

module.exports.locationInfo = (req, res) => {
	res.render('index', {
		title: 'Location Info'
	});
}

module.exports.addReview = (req, res) => {
	res.render('index', {
		title: 'Location Review'
	});
}