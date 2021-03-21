import React from 'react';
import './navbar.css';

export default class Navbar extends React.Component {

    render() {
        return (
            <div id="nav-box">
                <ul id="navbar" className="pure-u-1-3">
                    <li><a className={this.props.page == "homepage" ? "active" : ""} href="/"><i className="fas fa-home"></i> Home</a></li>
                    <li><a className={this.props.page == "blog" ? "active" : ""} href="/blog"><i className="fas fa-book"></i> Blog</a></li>
                    <li><a className={this.props.page == "leaderboards" ? "active" : ""} href="/leaderboards"><i className="fas fa-chart-bar"></i> Leaderboards</a></li>
                    <li><a className={this.props.page == "rules" ? "active" : ""} href="/rules"><i className="fas fa-scroll"></i> Rules</a></li>
                    <li><a className={this.props.page == "chat" ? "active" : ""} href="/chat"><i className="fas fa-comments"></i> Chat</a></li>
                    <li><a className={this.props.page == "map" ? "active" : ""} href="/map"><i className="fas fa-map-marked-alt"></i> World Map</a></li>
                    <li><a id="store" href="https://store.minecrossing.xyz"><i className="fas fa-shopping-cart"></i> Store</a></li>
                    <li><a className={this.props.page == "login" ? "active" : ""} href="https://store.minecrossing.xyz/login"><i className="fas fa-sign-in-alt"></i> Login</a></li>
                </ul>
            </div>
        )
    }

}
