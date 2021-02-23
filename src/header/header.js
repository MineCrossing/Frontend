import React from 'react';
import logo from '../images/logo.png';
import './header.css';

function Navbar() {
	return (
		<header>
            <img src={logo} className="logo pure-img pure-u-1-3" alt="logo" />
		</header>
	)
}

export default Navbar;