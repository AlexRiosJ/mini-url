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
				urls: action.payload
			};
		case ADD_URL:
			return {
				...state,
				urls: [action.payload, ...state.urls]
			};
		case DELETE_URL:
			return {
				...state,
				urls: state.urls.filter(url => url.id !== action.payload)
			};
		case CLEAR_URLS:
			return {
				...state,
				urls: null,
				error: null
			};
		case URL_ERROR:
			return {
				...state,
				error: action.payload
			};
		case CLEAR_ERRORS:
			return {
				...state,
				error: null
			};
		default:
			break;
	}
};
