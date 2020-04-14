import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	const date = new Date();
	const month = months[date.getMonth()];

	return (
		<footer className='mt-5 p-3 text-center bg-light'>
			<div className='container'>
				<div className='float-left'>
					<i className='fas fa-copyright' /> {month} {date.getFullYear()}
				</div>

				<Link to='/'>
					Mini <i className='fas fa-compress' /> URL
				</Link>

				<Link className='float-right' to='/about'>
					About
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
