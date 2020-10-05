import React from 'react';
import './Home.css';

const Home = () => {
	return (
		<div className='home'>
			<div className='home__row'>
				<div className='home__column'>
					<div className='home__imageColumn'>
						<img src='../images/' alt='' />
					</div>
				</div>
				<div className='home__column'>
					<div className='home__introColumn'>Hello Programmer</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
