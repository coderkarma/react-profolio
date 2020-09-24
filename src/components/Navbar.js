import React from 'react';
import logo from '../images/logo.png';
import './Navbar.css';

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='navbar__logo'>
				<img src={logo} alt='logo' />
			</div>
			<div className='navbar__icons'>
				<ul>
					<li>About</li>
					<li>Projects</li>
					<li>Testimonial</li>
					<li>Contact</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
