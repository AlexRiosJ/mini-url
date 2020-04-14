import React from 'react';
import PropTypes from 'prop-types';

const MiniURLItem = ({ url }) => {
	const { longUrl, miniUrl, clicks } = url;

	return (
		<ul className='list-group my-2'>
			<li className='list-group-item align-items-center'>
				<button className='btn btn-link disabled'>{longUrl}</button>
				<div className='float-right'>
					<span className='btn btn-link mr-2'>{miniUrl}</span>
					<span className='badge badge-secondary badge-pill badge-lg'>
						{clicks}
					</span>
					<a href='#!' className='ml-4'>
						<i className='fas fa-trash'></i>
					</a>
				</div>
			</li>
		</ul>
	);
};

MiniURLItem.propTypes = {
	url: PropTypes.object.isRequired
};

export default MiniURLItem;
