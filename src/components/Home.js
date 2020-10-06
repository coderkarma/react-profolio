import React from 'react';
import image from '../images/front-end.png';
import './Home.css';

const Home = () => {
	return (
		<div className='home'>
			<div className='home__row'>
				<div className='home__column'>
					<div className='home__imageColumn'>
						<img src={image} alt='home-pageImage' />
					</div>
				</div>
				<div className='home__column'>
					<div className='home__introColumn'>
						<h1>Hello, I am Karma, a Front end developer</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
