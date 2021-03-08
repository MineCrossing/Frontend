import "./discovercard.css"
import React, {useState} from "react";

const DiscoverCard = props => {
    const [content, setContent] = useState(props);
    return (
        <a className={"discover-card"} href={"/" + content.title}>
            <h3>{content.title}</h3>
            <i className={content.icon}> </i>
            <p>{content.text}</p>
        </a>
    );
};

export default DiscoverCard
