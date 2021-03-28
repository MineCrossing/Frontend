import React from 'react';
import './navbar.css';
import {NavLink} from "react-router-dom";

export default class Navbar extends React.Component {

    render() {
        return (
            <div id="nav-box">
                <ul id="navbar" className="pure-u-1-3">
                    <li><NavLink activeClassName={"active"} exact to="/"><i className="fas fa-home"> </i> Home</NavLink></li>
                    <li><NavLink activeClassName={"active"} to="/blog"><i className="fas fa-book"> </i> Blog</NavLink></li>
                    <li><NavLink activeClassName={"active"} to="/leaderboards"><i className="fas fa-chart-bar"> </i> Leaderboards</NavLink></li>
                    <li><NavLink activeClassName={"active"} to="/rules"><i className="fas fa-scroll"> </i> Rules</NavLink></li>
                    <li><NavLink activeClassName={"active"} to="/chat"><i className="fas fa-comments"> </i> Chat</NavLink></li>
                    <li><NavLink activeClassName={"active"} to="/map"><i className="fas fa-map-marked-alt"> </i> World Map</NavLink></li>
                    <li><a id="store" href="https://store.minecrossing.xyz"><i className="fas fa-shopping-cart"> </i> Store</a></li>
                    <li><NavLink activeClassName={"active"} to="https://store.minecrossing.xyz/login"><i className="fas fa-sign-in-alt"> </i> Login</NavLink></li>
                </ul>
            </div>
        )
    }

}
