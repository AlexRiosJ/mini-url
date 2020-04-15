import {
	GET_URLS,
	ADD_URL,
	DELETE_URL,
	CLEAR_URLS,
	URL_ERROR,
	CLEAR_ERRORS
} from '../types';

export default (state, action) => {
	switch (action.type) {
		case GET_URLS:
			return {
				...state,
				urls: action.payload,
				loading: false
			};
		case ADD_URL:
			return {
				...state,
				urls: [action.payload, ...state.urls],
				loading: false
			};
		case DELETE_URL:
			return {
				...state,
				urls: state.urls.filter(url => url._id !== action.payload),
				loading: false
			};
		case CLEAR_URLS:
			return {
				...state,
				urls: null,
				error: null,
				loading: false
			};
		case URL_ERROR:
			return {
				...state,
				error: action.payload,
				loading: false
			};
		case CLEAR_ERRORS:
			return {
				...state,
				error: null,
				loading: false
			};
		default:
			break;
	}
};
