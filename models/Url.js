const mongoose = require('mongoose');
const shortid = require('shortid');

const UrlSchema = mongoose.Schema({
	longUrl: {
		type: String,
		required: true
	},
	miniUrl: {
		type: String,
		require: true,
		default: shortid.generate
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users'
	},
	clicks: {
		type: Number,
		required: true,
		default: 0
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('url', UrlSchema);
