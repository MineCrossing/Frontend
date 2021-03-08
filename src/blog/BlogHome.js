import './bloghome.css';
import React from 'react';
import PreviewBlogsList from "../homepage/PreviewBlogsList";

const BlogHome = props => {
    return (
        <main id={"blog-home"}>
            <h1 className={"homepage-header"}>Developer Blogs</h1>
            <span className={"separator"}> </span>
            <PreviewBlogsList/>
        </main>
    );
};

export default BlogHome;
