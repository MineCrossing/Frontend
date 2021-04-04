import React from 'react';
import {makeStyles} from "@material-ui/core";
import MDEditor from "@uiw/react-md-editor";
import Paper from "@material-ui/core/Paper";


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
    }
}));

function BlogComment(props) {
    const classes = useStyles();
    const date = new Date(props.comment.createdDate);
    return (
        <Paper className={classes.root}>
            <div className={classes.headerFlex}>
                <h2 className={classes.username}>{props.comment.username}</h2>
                <p className={classes.date}>{`${date.toLocaleDateString()} @ ${date.toLocaleTimeString()}`}</p>
            </div>
            <MDEditor.Markdown className={classes.message} source={props.comment.message} />
        </Paper>
    )
}

export default BlogComment;
