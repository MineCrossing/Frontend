import React, {useEffect, useState} from "react";
import MDEditor from '@uiw/react-md-editor';
import Endpoints from "../utils/Endpoints";
import {makeStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
    root: {
        width: "60%",
        margin: "auto",
        "& *": {
            textAlign: "justify"
        }
    },
    title: {
        textTransform: "capitalize",
        margin: theme.spacing(1, 0, 0.2, 0),
        color: theme.palette.primary.main,
        fontFamily: "\"RocknRoll One\", sans-serif"
    },
    subTitle: {
        margin: theme.spacing(0, 0, 0.2, 0),
        color: "rgba(0,0,0,0.8)"
    },
    paper: {
        padding: theme.spacing(1),
        marginBottom: theme.spacing(2)
    },
    mde: {
        "& h1": {
            fontSize: "1.3em",
            textTransform: "capitalize",
        },
        "& h2, h3, h4, h5, h6": {
            fontSize: "1.2em",
            textTransform: "capitalize"
        },
    }
}));

function ViewBlog(props) {
    const [data, setData] = useState(null);
    const classes = useStyles();

    useEffect(() => {
        let isMounted = true;

        fetch(Endpoints.BLOG_POSTS_GET + `${props.match.params.id}`)
            .then( (response) => response.json())
            .then( (data) => {
                if (isMounted)
                    setData(data)
            })
            .catch ((err) => {console.log("something went wrong ", err)});

        return () => isMounted = false;
    }, []);

    return (
        <main className={classes.root}>
            <h1 className={classes.title}>{data?.title}</h1>
            <p className={classes.subTitle}>{data?.subtitle}</p>
            <span className={"separator"}> </span>
            <Paper className={classes.paper} elevation={2}>
                <MDEditor.Markdown className={classes.mde} source={data?.content} />
            </Paper>
            <span className={"separator"}> </span>
            <Paper className={classes.paper} elevation={1}>
                <h2>Comments</h2>
                <span className={"separator"}> </span>
            </Paper>
        </main>
    );
}

export default ViewBlog;
