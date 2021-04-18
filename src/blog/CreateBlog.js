import React, {useState} from "react";
import MDEditor from '@uiw/react-md-editor';
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import Endpoints from "../utils/Endpoints";
import LoginRequired from "../shared/LoginRequired";
import {Redirect, withRouter} from "react-router-dom";
import AuthUtils from "../utils/AuthUtils";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "80%",
        margin: "auto",
        paddingTop: "2em",
        "& h2": {
            fontWeight: "500",
            fontSize: "1.2em",
            margin: theme.spacing(0, 0, 0, 0),
            textAlign: "left"
        }
    },
    mde: {
        marginBottom: theme.spacing(1),
        border: "solid 1px rgba(0, 0, 0, 0.23)",
        boxShadow: "none",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        width: "80%",
        margin: "auto"
    },
    contentHeaderFlex: {
        display: "flex",
        marginBottom: theme.spacing(0.5),
        "& span" :{
            margin: theme.spacing(0.18, 0, 0, 0.5),
            color: theme.palette.error.main
        },
        "& p": {
            fontSize: "0.9em",
            color: "rgba(0,0,0,0.7)",
            margin: "0 0 0 auto",
            "& a": {
                textDecoration: "underline"
            }
        }
    },
    buttonContainer: {
        display: "flex"
    },
    button: {
        width: "fit-content",
        margin: 0,
        display: "block",
        "&:first-child": {
            margin: theme.spacing(0, 1, 0, "auto")
        }
    },
    textField: {
        margin: theme.spacing(0.5, 0, 1.5, 0)
    }
}));

function CreateBlog(props) {
    const [content, setContent] = useState(props.content ?? props.location?.state?.content ?? "");
    const [title, setTitle] = useState(props.title ?? props.location?.state?.title ?? "");
    const [subtitle, setSubtitle] = useState(props.subtitle ?? props.location?.state?.subtitle ?? "");
    const [preview, setPreview] = useState(false);
    const [created, setCreated] = useState(false);
    const [authError, setAuthError] = useState(false);
    const [validationError, setValidationError] = useState(false);
    const classes = useStyles();

    const createBlog = () => {
        let token = AuthUtils.getAuthToken();

        if (token === "") {
            setAuthError(true);
            return;
        }

        if (!content || !title || !subtitle) {
            setValidationError(true);
            return;
        }

        fetch(Endpoints.BLOG_POSTS_CREATE, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                subtitle,
                content,
                userID: props.auth?.userID,
                blogPostID: props.location?.state?.blogPostID ?? "",
                token
            })
        })
            .then( (response) => {
                if (response.status === 200)
                    setCreated(true);
                else if (response.status === 401) {
                    setAuthError(true);
                    AuthUtils.processLogout();
                }
            })
            .catch ((err) => {console.log("something went wrong ", err)});
    };

    if ((props.auth?.admin ?? false) || authError)
        return <LoginRequired/>;

    if (created)
        return <Redirect to={"/blog"}/>;

    return (
        <main className={classes.root}>
            <h1 className={"homepage-header"}>Create Blog</h1>
            <span className={"separator"}> </span>
            <form action="" className={classes.form}>
                <div className={classes.contentHeaderFlex}>
                    <h2>Title</h2>
                    {validationError && !title ? <span>This field is required</span> : ""}
                </div>
                <TextField className={classes.textField} color={"secondary"} variant={"outlined"} id={"title"} name={"title"} value={title}
                           onChange={(e) => setTitle(e.target.value)} error={validationError && !title}/>
                <div className={classes.contentHeaderFlex}>
                    <h2>Subtitle</h2>
                    {validationError && !subtitle ? <span>This field is required</span> : ""}
                </div>
                <TextField className={classes.textField} color={"secondary"} variant={"outlined"} id={"subtitle"} name={"subtitle"} value={subtitle}
                           onChange={(e) => setSubtitle(e.target.value)} error={validationError && !subtitle}/>
                <div className={classes.contentHeaderFlex}>
                    <h2>Content</h2>
                    {validationError && !content ? <span>This field is required</span> : ""}
                    <p>Try adding some <a href="https://www.markdownguide.org/cheat-sheet/" target={"_blank"}>markdown</a>!</p>
                </div>
                <MDEditor
                    className={classes.mde}
                    value={content}
                    onChange={setContent}
                    height={600}
                    preview={preview ? "preview" : "edit"}
                    hideToolbar={true}
                    name={"content"}
                />
                <div className={classes.buttonContainer}>
                    <Button variant="contained" color="secondary" className={classes.button} onClick={() => setPreview(!preview)}>{preview ? "Edit" : "Preview"}</Button>
                    <Button variant="contained" color="primary" className={classes.button} onClick={() => createBlog(content)}>Save</Button>
                </div>
            </form>
            <br/>
        </main>
    );
}

export default withRouter(CreateBlog)
