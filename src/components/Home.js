import React from 'react';
import image from '../images/developer.svg';
import './Home.css';

const Home = () => {
	return (
		<div className='home'>
			<div className='home__imageColumn'>
				<img src={image} alt='home-pageImage' />
			</div>

			<div className='home__introColumn'>
				<h1>Hello, I'm Karma, a Front End Developer</h1>
			</div>
		</div>
	);
};

export default Home;
