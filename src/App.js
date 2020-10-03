import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

import './App.css';

const App = () => {
	return (
		<Router>
			<div className='app'>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/about' component={About} />
					<Route exact path='/projects' component={Projects} />
					<Route exact path='/testimonial' component={Testimonials} />
					<Route exact path='/contact' component={Contact} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
