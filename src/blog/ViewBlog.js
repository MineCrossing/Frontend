import React  from "react";
import MDEditor from '@uiw/react-md-editor';

function ViewBlog(props) {

    return (
        <main>
            <MDEditor.Markdown source={props.blog.content} />
        </main>
    );
}

export default ViewBlog;