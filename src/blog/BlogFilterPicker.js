import React, {useState} from 'react';
import "./blogfilterpicker.css"

const BlogFilterPicker = props => {
    const [lastSelected, setLastSelected] = useState(null);

    const handleSelection = (e) => {
        lastSelected?.classList.remove("selected");
        setLastSelected(e.target);
        e.target.classList.add("selected");
        props.onClick(e);
    };

    return (
        <div className={"filter-picker-container"}>
            <h2 className={"filter-picker-header"}>{props.title}</h2>
            <ul>
                {props.options.map((o, i) => <li key={i} onClick={(e) => handleSelection(e)}>{o}</li>)}
            </ul>
        </div>
    );
};

export default BlogFilterPicker;
