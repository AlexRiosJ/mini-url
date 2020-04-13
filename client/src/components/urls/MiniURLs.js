import React, { useState } from 'react';
import MiniURLItem from './MiniURLItem';

const MiniURLs = () => {
	const [urls, setUrls] = useState([
		{
			longUrl: 'longurl1.com',
			miniUrl: '0123456',
			clicks: 0,
			id: 0
		},
		{
			longUrl: 'longurl2.com',
			miniUrl: 'asdfghj',
			clicks: 3,
			id: 1
		},
		{
			longUrl: 'longurl3.com',
			miniUrl: 'zxcvbnm',
			clicks: 7,
			id: 2
		}
	]);

	return (
		<div className='jumbotron'>
			{urls.length === 0 ? (
				<p className='center'>No URLs to show...</p>
			) : (
				urls.map(url => <MiniURLItem url={url} key={url.id} />)
			)}
		</div>
	);
};

export default MiniURLs;
