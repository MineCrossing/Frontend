import React, {useEffect, useState} from 'react';
import "./blogfilterpicker.css"
import * as ReactDOM from "react-dom";

const BlogFilterPicker = props => {
    return (
        <div className={"filter-picker-container"}>
            <h2 className={"filter-picker-header"}>{props.title}</h2>
            <ul>
                {props.options.map((o, i) => <li className={o === props.selected ? "selected" : ""} key={i} onClick={props.onClick}>{o}</li>)}
            </ul>
        </div>
    );
};

export default BlogFilterPicker;
