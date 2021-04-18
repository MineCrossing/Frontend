import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core";
import MDEditor from "@uiw/react-md-editor";
import Paper from "@material-ui/core/Paper";
import AuthUtils from "../utils/AuthUtils";
import Endpoints from "../utils/Endpoints";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(0, "auto", 2, "auto"),
        padding: theme.spacing(1),
    },
    headerFlex: {
        display: "flex",
        borderBottom: "solid 1px rgba(0,0,0,0.2)",
        paddingBottom: theme.spacing(0.5),
        marginBottom: theme.spacing(0.5),
        "& *": {
            margin: 0
        }
    },
    username: {
        fontSize: "1.1em",
        color: theme.palette.primary.main,
        marginRight: "auto"
    },
    date: {
        fontSize: "0.9em",
        color: "rgba(0,0,0,0.6)"
    },
    message: {
        "& img": {
            maxWidth: "25em"
        }
    },
    deleteButton: {
        backgroundColor: "#E74C3C",
        borderColor: "#E74C3C",
        display: "block",
        marginLeft: "auto"
    },
}));

function BlogComment(props) {
    const classes = useStyles();
    const [admin, setAdmin] = useState(false);
    const date = new Date(props.comment.createdDate);

    useEffect(() => {
        let token = AuthUtils.getAuthCookie();

        fetch(Endpoints.CHECK_AUTH, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: token}
        )
            .then( (response) => response.json())
            .then((data) => setAdmin(data?.admin ?? false))
            .catch ((err) => {console.log("something went wrong ", err)});
    }, []);

    const deleteComment = () => {
        if (!admin)
            return;

        let token = AuthUtils.getAuthToken();
        if (token === "")
            return;

        fetch(Endpoints.BLOG_POSTS_DELETE_COMMENT, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userID: AuthUtils.getUserID(),
                blogCommentID: props.comment.blogCommentID,
                tokenID: token
            })
        })
            .then( (response) => {
                if (response)
                    props.removeComment(props.comment.blogCommentID);
            })
            .catch ((err) => {console.log("something went wrong ", err)});
    };

    return (
        <Paper className={classes.root}>
            <div className={classes.headerFlex}>
                <h2 className={classes.username}>{props.comment.username}</h2>
                <p className={classes.date}>{`${date.toLocaleDateString()} @ ${date.toLocaleTimeString()}`}</p>
            </div>
            <MDEditor.Markdown className={classes.message} source={props.comment.message} />
            {admin ?
                <Button className={classes.deleteButton} variant={"contained"} color={"secondary"} onClick={deleteComment}>Delete</Button>
                : ""}
        </Paper>
    )
}

export default BlogComment;
