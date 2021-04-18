import React, {useEffect, useState} from 'react'
import Endpoints from "../utils/Endpoints";
import BlogComment from "./BlogComment";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";
import MDEditor from "@uiw/react-md-editor";
import AuthUtils from "../utils/AuthUtils";

const useStyles = makeStyles(theme => ({
    noComments: {
        textAlign: "center !important",
        marginBottom: theme.spacing(2)
    },
    button: {
        display: "block",
        width: "fit-content",
        margin: theme.spacing(0, "auto", 2, "auto"),
    },
    mdeContainer: {
        "& h3": {
            color: "#2c2c2c",
            fontWeight: "300",
            fontSize: "1.1em"
        }
    },
    buttonFlex: {
        display: "flex",
        "& button": {
            margin: theme.spacing(1 , 1,)
        },
        "& :first-child": {
            marginLeft: "auto"
        },
        "& :last-child": {
            marginRight: 0
        },
    }
}));

function BlogComments(props) {
    const classes = useStyles();
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [preview, setPreview] = useState(false);
    const [addComment, setAddComment] = useState(false);

    const fetchComments = (isMounted) => {
        fetch(Endpoints.BLOG_POSTS_GET_COMMENTS + `${props.id}`)
            .then( (response) => response.json())
            .then( (data) => {
                if (isMounted)
                    setComments(data ?? [])
            })
            .catch ((err) => {console.log("something went wrong ", err)});
    };

    useEffect(() => {
        let isMounted = true;
        fetchComments(isMounted);
        return () => isMounted = false;
    }, []);

    const createComment = () => {
        const body = JSON.stringify({blogPostID: props.id, message: newComment, userID: AuthUtils.getUserID(), tokenID: AuthUtils.getAuthToken()});

        fetch(Endpoints.BLOG_POSTS_CREATE_COMMENT, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body
        })
            .then( (response) => {
                if (response)
                    fetchComments(true);

                setNewComment("");
            })
            .catch ((err) => {console.log("something went wrong ", err)});
    };

    return (
        <div>
            {comments?.length > 0 ? comments
                .sort((a, b) => a.createdDate - b.createdDate)
                .map((c, i) => <BlogComment key={i} comment={c}/>)
                :  <p className={classes.noComments}>No comments to display</p>}
            {addComment ?
                <div className={classes.mdeContainer}>
                    <h3>Add Comment</h3>
                    <MDEditor
                        value={newComment}
                        onChange={setNewComment}
                        height={200}
                        preview={preview ? "preview" : "edit"}
                        hideToolbar={true}
                        name={"comment"}
                    />
                    <div className={classes.buttonFlex}>
                        <Button variant="contained" color="secondary" className={classes.button} onClick={() => setPreview(!preview)}>{preview ? "Edit" : "Preview"}</Button>
                        <Button variant="contained" color="primary" className={classes.button} onClick={() => createComment()}>Save</Button>
                    </div>
                </div> :
                <Button className={classes.button} variant={"contained"} color={"primary"} onClick={() => setAddComment(true)}> Add Comment </Button>
            }
        </div>
    );
}

export default BlogComments;
