import React, {useEffect, useState} from "react";
import MDEditor from '@uiw/react-md-editor';
import Endpoints from "../utils/Endpoints";

function ViewBlog(props) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(Endpoints.BLOG_POSTS_GET + `/${props.match.params.id}`)
            .then( (response) => response.json() )
            .then( (data) => {
                console.log(data);
                setData(data)
            })
            .catch ((err) => {console.log("something went wrong ", err)});
    }, []);

    return (
        <main>
            <MDEditor.Markdown source={data?.content} />
        </main>
    );
}

export default ViewBlog;
