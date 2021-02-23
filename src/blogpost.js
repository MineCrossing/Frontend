import React from 'react';
import './homepage/homepage.css';

export default class Blogpost extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="blog-post">
                <img className="blog-post-person" src={"https://crafatar.com/avatars/" + this.props.uuid} />
                
                <div className="blog-post-content">
                    <div className="blog-post-content-header">
                        <h2 className="blog-title">{this.props.name}</h2>
                        <span className="blog-time">By <a href="#"><b>{this.props.author}</b></a> | {this.props.time}</span>
                    </div>
                    
                    <p>
                        {this.props.content}
                    </p>

                    <a className="read-more">Read More</a>
                </div>
            </div>
        )
    }
}