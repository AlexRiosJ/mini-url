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
	clicks: {
		type: Number,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});
