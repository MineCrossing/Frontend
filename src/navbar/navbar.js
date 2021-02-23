import React from 'react';
import './navbar.css';

function Navbar() {
	return (
		<div id="nav-box">
			<ul id="navbar" className="pure-u-1-3">
				<li><a className="active" href="/"><i className="fas fa-home"></i> Home</a></li>
				<li><a href="/blog"><i className="fas fa-book"></i> Blog</a></li>
				<li><a href="/leaderboards"><i className="fas fa-chart-bar"></i> Leaderboards</a></li>
				<li><a href="/rules"><i className="fas fa-scroll"></i> Rules</a></li>
				<li><a href="/chat"><i className="fas fa-comments"></i> Chat</a></li>
				<li><a href="/map"><i className="fas fa-map-marked-alt"></i> World Map</a></li>
				<li><a id="store" href="https://store.minecrossing.xyz"><i className="fas fa-shopping-cart"></i> Store</a></li>
				<li><a href="/login"><i className="fas fa-sign-in-alt"></i> Login</a></li>
			</ul>
		</div>
	)
}

export default Navbar;