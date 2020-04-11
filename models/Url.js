const mongoose = require('mongoose');

const UrlSchema = mongoose.Schema({
	longUrl: {
		type: String,
		required: true
	},
	miniUrl: {
		type: String,
		require: true
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users'
	},
	date: {
		type: Date,
		default: Date.now
	}
});
