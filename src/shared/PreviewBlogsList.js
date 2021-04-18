import React from 'react';
import PreviewBlog from "./PreviewBlog";

const PreviewBlogsList = props => {
    const content = props.blogs == null && !props.blogs?.isArray() ?
        <div>No Blogs to display</div> :
        props.blogs.map((blog, i) => <PreviewBlog remove={props.remove} auth={props.auth} blog={blog} key={i}/>);

    return (
        content
    );
};

export default PreviewBlogsList;
