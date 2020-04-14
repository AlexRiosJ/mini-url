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
		urls.length > 0 && (
			<div className='jumbotron'>
				{urls.map(url => (
					<MiniURLItem key={url.id} url={url} />
				))}
			</div>
		)
	);
};

export default MiniURLs;
