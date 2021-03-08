import './previewblog.css';
import React, { useState, useEffect } from 'react';
import Endpoints from "../utils/Endpoints";
import PreviewBlog from "./PreviewBlog";

const PreviewBlogsList = props => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
            fetch(Endpoints.BLOG_POSTS_PREVIEW)
                .then( (response) => response.json() )
                .then( (data) => setBlogs(data))
                .catch ((err) => {console.log("something went wrong ", err)});
        }
    );

    return (
        blogs.map((blog, i) => <PreviewBlog blog={blog} key={i}/>)
    );
};

export default PreviewBlogsList;
