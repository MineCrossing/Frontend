import './previewblog.css';
import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core";
import {Redirect} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    buttonContainer: {
        paddingTop: theme.spacing(1),
    }
}));

const PreviewBlog = props => {
    const classes = useStyles();
    const [redirect, setRedirect] = useState(false);

    if (redirect)
        return <Redirect to={{
            pathname: "/CreateBlog",
            state: { content: props.blog.content, title: props.blog.title, subtitle: props.blog.subtitle, blogPostID: props.blog.blogPostID}
        }}/>;

    return (
        <div className={"preview-blog-container card"}>
            <div className={"preview-blog-container-flex"}>
                <div className={"preview-blog-title-container"}>
                    <h2>{props.blog.title}</h2>
                    <p className={"preview-blog-subtitle"}>{props.blog.subtitle}</p>
                </div>
                <div>
                    <p className={"preview-blog-soft-text"}>
                        <i className={"fas fa-calendar-alt"}/>
                        {new Date(props.blog.date).toLocaleTimeString("en-us", {
                        weekday: "long", year: "numeric", month: "short",
                        day: "numeric", hour: "2-digit", minute: "2-digit"
                        })}
                    </p>
                    <p className={"preview-blog-soft-text"}>
                        <i className={"fas fa-user"}/>
                        By <strong>{props.blog.author}</strong>
                    </p>
                </div>
            </div>
            <span className={"separator"}> </span>
            <p className={"preview-blog-preview"}>{props.blog.preview.replace(/[\/\\#()$~%*<>{}]/g,'')} ...</p>
            <Grid className={classes.buttonContainer} container justify={"center"} alignItems={"center"}>
                {props.showEdit ? <Grid item lg={2} md={4} sm={6}>
                    <Button variant={"contained"} color={"secondary"} onClick={() => setRedirect(true)}>Edit</Button>
                </Grid> : ""}
                <Grid item lg={2} md={4} sm={6}>
                    <Button className={"read-more-button"} variant={"contained"} color={"primary"} href={`/viewblog/${props.blog.blogPostID}`}>Read More</Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default PreviewBlog;
