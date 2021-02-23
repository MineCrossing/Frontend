import React from 'react';
import Blogpost from '../blogpost.js';
import './homepage.css';

function Homepage() {
    return (
        <div id="homepage">
            <div id="content" className="pure-u-3-5">
                <h1>Welcome to MineCrossing!</h1>
                <p id="welcome-paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <hr />

                <Blogpost 
                    name="Wow a cool blog post!" 
                    uuid="c3f82c10-348e-4ab5-b2a0-d9a4f6c67602" 
                    author="TheMGRF"
                    time="Thursday at 2:22PM"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />
                <Blogpost 
                    name="Wow another older cool blog post!" 
                    uuid="f025c1c7-f55a-4ea0-b8d9-3f47d17dfe0f" 
                    author="JamieCee" 
                    time="21/02/2021"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />
                <Blogpost 
                    name="An even older blog post!" 
                    uuid="af36f704-c11d-4402-9e91-413875e768db" 
                    author="EthanCopeland"
                    time="16/02/2021"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />
            </div>
        </div>
    );
}

export default Homepage;