import React, { useState, useContext, useEffect, Fragment } from 'react';
import UrlContext from '../../context/url/urlContext';
import AlertContext from '../../context/alert/alertContext';
import Alerts from '../layouts/Alerts';

const MiniURLForm = () => {
	const urlContext = useContext(UrlContext);
	const alertContext = useContext(AlertContext);

	const { addUrl, clearErrors, error } = urlContext;
	const { setAlert } = alertContext;

	useEffect(() => {
		if (error) {
			setAlert(error, 'warning', 2000);
			clearErrors();
		}
		// eslint-disable-next-line
	}, [urlContext]);

	const [url, setUrl] = useState({ longUrl: '' });

	const onChange = e => setUrl({ ...url, [e.target.name]: e.target.value });

	const onSubmit = e => {
		e.preventDefault();
		addUrl(url);
		setUrl({ longUrl: '' });
	};

	return (
		<Fragment>
			<form className='form-group form-inline my-4' onSubmit={onSubmit}>
				<label className='col-form-label sr-only' htmlFor='inputDefault'>
					Shorten your link
				</label>
				<input
					required
					type='url'
					name='longUrl'
					className='form-control form-control-lg col mr-2'
					placeholder='Shorten your link'
					id='longUrl'
					value={url.longUrl}
					onChange={onChange}
				></input>
				<button type='submit' className='btn btn-lg btn-secondary'>
					Shorten
				</button>
			</form>
			<Alerts />
		</Fragment>
	);
};

export default MiniURLForm;
