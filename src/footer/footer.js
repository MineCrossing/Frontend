import React from 'react';
import './footer.css';

function Footer() {
    return (
        <footer className="site-footer pure-g">
            <div className="footer-content">
                <div className="footer-text-content">
                    <div className="footer-about pure-u-1-3">
                        <h6>About</h6>
                        <p className="text-justify">
                            Welcome to <b>MineCrossing</b> a revolutionary new server featuring many
                            buzz words and business sounding innovative phrasing to make it sound
                            better than it actually is.
                        </p>
                    </div>

                    <div className="footer-extras pure-u-1-3">
                        <h6>Links</h6>
                        <ul className="footer-links">
                            <li><a href="//map.minecrossing.xyz" target="_blank">World Map</a></li>
                            <li><a href="//api.minecrossing.xyz" target="_blank">API</a></li>
                            <li><a href="//discord.minecrossing.xyz" target="_blank">Discord</a></li>
                            <li><a href="//play.minecrossing.xyz" target="_blank">Minecraft</a></li>
                        </ul>
                    </div>

                    <div className="footer-misc footer-links pure-u-1-3">
                        <h6>Quick Links</h6>
                        <ul className="footer-links">
                            <li><a href="//status.minecrossing.xyz" target="_blank">Status</a></li>
                            <li><a href="mailto:contact@minecrossing.xyz">Contact Us</a></li>
                            <li><a href="https://docs.google.com/document/d/e/2PACX-1vT-R4zo-9gcR_WBf4RZD887ox4-yqcGmq6E4aMh9dVi3kxeXYMjFEeP_hEOqNl0FfvEPzSRQ6EtXDxz/pub">Terms of Service</a></li>
                            <li><a href="https://docs.google.com/document/d/e/2PACX-1vQyWI-cNev18GUO8yf7sIhAl6pe8w829u7QenpE8vF_0-omEek1KSXXnQavBCnbmjrqrzOVCTGy5cCK/pub">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                
                <hr />

                <div className="footer-copyright pure-u-2-5">
                    <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by <a href="//minecrossing.xyz">MineCrossing</a></p>
                </div>

                <div className="footer-social pure-u-3-5">
                    <ul className="social-icons">
                        <li><a className="facebook" href="//facebook.com/MineCrossing" target="_blank"><i className="fab fa-facebook-square"></i></a></li>
                        <li><a className="twitter" href="//twitter.com/MineCrossingMC" target="_blank"><i className="fab fa-twitter-square"></i></a></li>
                        <li><a className="github" href="//github.com/MineCrossing" target="_blank"><i className="fab fa-github"></i></a></li>
                        <li><a className="youtube" href="//youtube.com/MineCrossing" target="_blank"><i className="fab fa-youtube-square"></i></a></li>   
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
