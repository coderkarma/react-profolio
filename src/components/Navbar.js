import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import './Navbar.css';

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='navbar__logo'>
				<Link to='/'>
					<img src={logo} alt='logo' />
				</Link>
			</div>
			<div className='navbar__icons'>
				<ul>
					<Link to='/about'>
						<li>About</li>
					</Link>
					<Link to='/project'>
						<li>Projects</li>
					</Link>

					<Link to='/testimonial'>
						<li>Testimonial</li>
					</Link>
					<Link to='/contact'>
						<li>Contact</li>
					</Link>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
