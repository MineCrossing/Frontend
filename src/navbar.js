import React from 'react';
import './navbar.css';

function Navbar() {
	return (
		<div id="nav-box">
			<ul id="navbar">
				<li><a className="active" href="#home"><i className="fas fa-home"></i> Home</a></li>
				<li><a href="#news"><i className="fas fa-comment-dots"></i> Blog</a></li>
				<li><a href="#contact"><i className="fas fa-chart-bar"></i> Leaderboards</a></li>
				<li><a href="#about"><i className="fas fa-scroll"></i> Rules</a></li>
				<li><a href="#about"><i className="fas fa-question-circle"></i> Support</a></li>
				<li><a href="#about"><i className="fas fa-map-marked-alt"></i> World Map</a></li>
				<li><a id="store" href="#about"><i className="fas fa-shopping-cart"></i> Store</a></li>
				<li><a href="#about"><i className="fas fa-sign-in-alt"></i> Login</a></li>
			</ul>
		</div>
	)
}

export default Navbar;