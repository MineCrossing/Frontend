import React, {useEffect, useState} from "react";
import MDEditor from '@uiw/react-md-editor';
import Endpoints from "../utils/Endpoints";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        width: "80%",
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
    mde: {
        marginBottom: theme.spacing(2),
        "& h1": {
            fontSize: "1.5em",
            fontWeight: "300",
            textTransform: "capitalize"
        },
        "& h2, h3, h4, h5, h6": {
            fontSize: "1.3em",
            fontWeight: "300",
            textTransform: "capitalize"
        },
    }
}));

function ViewBlog(props) {
    const [data, setData] = useState(null);
    const classes = useStyles();

    useEffect(() => {
        fetch(Endpoints.BLOG_POSTS_GET + `${props.match.params.id}`)
            .then( (response) => response.json())
            .then( (data) => setData(data))
            .catch ((err) => {console.log("something went wrong ", err)});
    }, []);

    return (
        <main className={classes.root}>
            <h1 className={classes.title}>{data?.title}</h1>
            <p className={classes.subTitle}>{data?.subtitle}</p>
            <span className={"separator"}> </span>
            <MDEditor.Markdown className={classes.mde} source={data?.content} />
        </main>
    );
}

export default ViewBlog;
