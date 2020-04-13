import React, { Fragment } from 'react';
import MiniURLForm from '../urls/MiniURLForm';
import MiniURLs from '../urls/MiniURLs';

const Home = () => {
	return (
		<Fragment>
			<MiniURLForm />
			<MiniURLs />
		</Fragment>
	);
};

export default Home;
