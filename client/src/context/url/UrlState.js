import React, { useReducer } from 'react';
import axios from 'axios';
import UrlContext from './urlContext';
import UrlReducer from './urlReducer';
import {
	GET_URLS,
	ADD_URL,
	DELETE_URL,
	CLEAR_URLS,
	URL_ERROR,
	CLEAR_ERRORS
} from '../types';

const UrlState = props => {
	const initialState = {
		urls: null,
		error: null,
		loading: true
	};

	const [state, dispatch] = useReducer(UrlReducer, initialState);

	// Get URLs
	const getUrls = async () => {
		try {
			const res = await axios.get('/api/urls');
			dispatch({ type: GET_URLS, payload: res.data });
		} catch (err) {
			dispatch({ type: URL_ERROR, payload: err.response.msg });
		}
	};

	// Add URL
	const addUrl = async url => {
		const config = {
			headers: { 'Content-Type': 'application/json' }
		};

		try {
			const res = await axios.post('/api/urls', url, config);
			dispatch({ type: ADD_URL, payload: res.data });
		} catch (err) {
			console.log(err.response.data.msg);
			dispatch({
				type: URL_ERROR,
				payload: err.response.data.msg
			});
		}
	};

	// Delete URL
	const deleteUrl = async id => {
		try {
			await axios.delete(`/api/urls/${id}`);
			dispatch({ type: DELETE_URL, payload: id });
		} catch (err) {
			dispatch({ type: URL_ERROR, payload: err.response.msg });
		}
	};

	// Clear URLs
	const clearUrls = () => {
		dispatch({ type: CLEAR_URLS });
	};

	// Clear errors
	const clearErrors = () => {
		dispatch({ type: CLEAR_ERRORS });
	};

	return (
		<UrlContext.Provider
			value={{
				urls: state.urls,
				error: state.error,
				getUrls,
				addUrl,
				deleteUrl,
				clearUrls,
				clearErrors
			}}
		>
			{props.children}
		</UrlContext.Provider>
	);
};

export default UrlState;
