import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ title }) => {
	return (
		<div className='navbar navbar-expand-lg navbar-dark bg-primary'>
			<div className='container'>
				<a className='navbar-brand' href='/'>
					{title}
				</a>
			</div>
		</div>
	);
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired
};

Navbar.defaultProps = {
	title: 'Mini URL'
};

export default Navbar;
