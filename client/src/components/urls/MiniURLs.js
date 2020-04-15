import React, { Fragment, useContext, useEffect } from 'react';
import MiniURLItem from './MiniURLItem';
import Spinner from '../layouts/Spinner';
import UrlContext from '../../context/url/urlContext';

const MiniURLs = () => {
	const urlContext = useContext(UrlContext);

	const { getUrls, urls, loading } = urlContext;

	useEffect(() => {
		getUrls();
		// eslint-disable-next-line
	}, []);

	if (urls !== null && urls.length === 0 && !loading) {
		return (
			<h3 className='text-secondary'>Go ahead and write down your URL!</h3>
		);
	}

	return (
		<Fragment>
			{urls !== null && !loading ? (
				<div className='jumbotron bg-primary pt-4 pb-2'>
					<div className='table-responsive'>
						<table className='table table-hover table-stripped'>
							<thead>
								<tr className='table-light'>
									<th scope='col'>Long URL</th>
									<th scope='col'>
										Mini <i className='fas fa-compress' /> URL
									</th>
									<th scope='col'>Clicks</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								{urls.map(url => (
									<MiniURLItem key={url._id} url={url} />
								))}
							</tbody>
						</table>
					</div>
				</div>
			) : (
				<Spinner />
			)}
		</Fragment>
	);
};

export default MiniURLs;
