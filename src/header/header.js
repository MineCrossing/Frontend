import React from 'react';
import logo from '../images/logo.png';
import './header.css';

function Header() {
	return (
		<header>
            <img src={logo} className="logo pure-img pure-u-1-3" alt="logo" />
		</header>
	)
}

export default Header;
