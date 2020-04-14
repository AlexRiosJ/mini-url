const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

// @route       POST api/users
// @desc        Register a user
// @access      Public
router.post(
	'/',
	[
		check('firstName', 'First name is required').not().isEmpty(),
		check('lastName', 'Last name is required').not().isEmpty(),
		check('email', 'Include a valid email').isEmail(),
		check('password', 'Enter a password with 6 or more characters').isLength({
			min: 6
		})
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { firstName, lastName, email, password } = req.body;

		try {
			let user = await User.findOne({ email });

			if (user) {
				return res.status(400).json({ msg: 'User already exists.' });
			}

			user = new User({
				firstName,
				lastName,
				email,
				password
			});

			const salt = await bcrypt.genSalt(10);
			user.password = await bcrypt.hash(password, salt);

			await user.save();

			const payload = {
				user: {
					id: user.id
				}
			};

			jwt.sign(
				payload,
				process.env.JWT_SECRET || config.get('jwtSecret'),
				{
					expiresIn: 3600
				},
				(err, token) => {
					if (err) throw err;
					res.status(201).json({ token });
				}
			);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server error');
		}
	}
);

module.exports = router;