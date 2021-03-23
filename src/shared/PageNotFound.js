import React from 'react';
import {Link} from "react-router-dom";

function PageNotFound() {
    return (
        <div id="error" className="pure-u-3-5">
            <h2 id="error-text">404 - Page Not Found</h2>
            <br />
            <Link id="safety" to="/">Back to Safety</Link>
        </div>
    )
}

export default PageNotFound;
