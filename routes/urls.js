const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const { check, validationResult } = require('express-validator');

const Url = require('../models/Url');

// @route       GET api/urls
// @desc        Get all users URLs
// @access      Private
router.get('/', auth, async (req, res) => {
	try {
		const urls = await Url.find({ user: req.user.id }).sort({
			date: -1
		});
		res.json(urls);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

// @route       POST api/urls
// @desc        Create new user URL
// @access      Private
router.post(
	'/',
	[auth, [check('longUrl', 'URL is required').not().isEmpty()]],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { longUrl } = req.body;

		try {
			let url = await Url.findOne({ longUrl });

			if (url) {
				return res.status(409).json({ msg: 'URL already exists' });
			}

			const newUrl = new Url({
				longUrl,
				user: req.user.id
			});

			const savedUrl = await newUrl.save();

			res.status(201).json(savedUrl);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server error');
		}
	}
);

// @route       DELETE api/urls/:id
// @desc        Delete URL
// @access      Private
router.delete('/:id', auth, async (req, res) => {
	try {
		let url = await Url.findById(req.params.id);
		if (!url) return res.status(404).json({ msg: 'URL not found' });

		// Make sure user owns contact
		if (url.user.toString() !== req.user.id) {
			return res.status(401).json({ msg: 'Not authorized' });
		}

		await Url.findByIdAndRemove(req.params.id);

		res.json({ msg: 'URL removed' });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

module.exports = router;
