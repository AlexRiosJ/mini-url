const express = require('express');
const router = express.Router();

const Url = require('../models/Url');

// @route       GET /:miniUrl
// @desc        Get all users URLs
// @access      Private
router.get('/:miniUrl', async (req, res) => {
	try {
		const url = await Url.findOne({ miniUrl: req.params.miniUrl });
		if (!url) {
			return res.status(404).send('Page not found');
		}
		url.clicks++;
		await url.save();
		res.redirect(url.longUrl);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

module.exports = router;
