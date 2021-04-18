import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";
import {Redirect} from "react-router-dom";
import AuthUtils from "../utils/AuthUtils";
import Endpoints from "../utils/Endpoints";
import MDEditor from "@uiw/react-md-editor";

const useStyles = makeStyles(theme => ({
    buttonContainer: {
        paddingTop: theme.spacing(1),
        width: "fit-content",
        marginLeft: "auto",
        "& > *": {
            margin: theme.spacing(0, 0, 0, 1),
        }
    },
    deleteButton: {
        backgroundColor: "#E74C3C",
        borderColor: "#E74C3C",
    },
    previewBlogContainer: {
        padding: theme.spacing(2),
        marginBottom: theme.spacing(4),
            "&: separator": {
                margin: theme.spacing(1, "auto"),
            }
        },
    previewBlogTitleContainer: {
        width: "70%",
        marginRight: "auto",
        "& h2": {
            fontSize: "2em",
            textAlign: "left",
            fontWeight: 500,
            color: "#0ed862",
            margin: 0,
            textTransform: "capitalize",
        },
        "& > separator": {
            marginTop: theme.spacing(0.5)
        },
        [theme.breakpoints.down("sm")]: {
            width: "100%",
        }
    },
    previewBlogSubtitle: {
        textAlign: "left",
        fontSize: "1em",
        color: "rgba(0,0,0,08) !important",
        margin: theme.spacing(0.1, 0),
    },
    previewBlogContainerFlex: {
        display: "flex",
        flexDirection: "row",
        margin: 0,
        "& > div": {
            display: "flex",
            flexDirection: "column",
        },
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            "& > :last-child": {
                [theme.breakpoints.down("sm")]: {
                    marginTop: theme.spacing(1),
                }
            }
        }
    },
    previewBlogSoftText: {
        padding: theme.spacing(0, 0.2),
        color: "rgba(0,0,0,0.7)",
        margin: theme.spacing(0, 0, 0.5, 0),
        fontSize: "0.9em",
        textAlign: "left",
        "& > i": {
            paddingRight: theme.spacing(0.5),
            color: "rgba(0,0,0,0.6)"
        }
    },
    blogPreview: {
        boxShadow: "none",
        "& *": {
            overflow: "hidden",
        },
        "& svg": {
            display: "none"
        },
        "& h1": {
            fontSize: "1.3em"
        },
        "& h2": {
            fontSize: "1.1em"
        }
    },
}));

const PreviewBlog = props => {
    const classes = useStyles();
    const [redirect, setRedirect] = useState(false);
    const [admin, setAdmin] = useState(props.admin);

    const deleteBlog = () => {
        let token = AuthUtils.getAuthToken();

        if (token === "") {
            setAdmin(false);
            return;
        }

        fetch(Endpoints.BLOG_POSTS_DELETE, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userID: AuthUtils.getUserID(),
                blogPostID: props.blog.blogPostID,
                tokenID: token
            })
        })
            .then( (response) => {
                if (response.status === 200)
                    props.remove(props.blog.blogPostID);
                else {
                    setAdmin(false);
                    AuthUtils.processLogout();
                }
            })
            .catch ((err) => {console.log("something went wrong ", err)});
    };

    if (redirect)
        return <Redirect to={{
            pathname: "/CreateBlog",
            state: { content: props.blog.content, title: props.blog.title, subtitle: props.blog.subtitle, blogPostID: props.blog.blogPostID}
        }}/>;

    const adminControls = <React.Fragment>
            <Button className={classes.deleteButton} variant={"contained"} color={"secondary"} onClick={deleteBlog}>Delete</Button>
            <Button variant={"contained"} color={"secondary"} onClick={() => setRedirect(true)}>Edit</Button>
    </React.Fragment>;
    return (
        <div className={`${classes.previewBlogContainer} card`}>
            <div className={classes.previewBlogContainerFlex}>
                <div className={classes.previewBlogTitleContainer}>
                    <h2>{props.blog.title}</h2>
                    <p className={classes.previewBlogSubtitle}>{props.blog.subtitle}</p>
                </div>
                <div>
                    <p className={classes.previewBlogSoftText}>
                        <i className={"fas fa-calendar-alt"}/>
                        {new Date(props.blog.date).toLocaleTimeString("en-us", {
                        weekday: "long", year: "numeric", month: "short",
                        day: "numeric", hour: "2-digit", minute: "2-digit"
                        })}
                    </p>
                    <p className={classes.previewBlogSoftText}>
                        <i className={"fas fa-user"}/>
                        By <strong>{props.blog.author}</strong>
                    </p>
                </div>
            </div>
            <span className={"separator"}> </span>
            <MDEditor
                className={classes.blogPreview}
                value={props.blog.preview}
                preview={"preview"}
                hideToolbar={true}
                name={"content"}
            />
            <div className={classes.buttonContainer}>
                    {admin ? adminControls : ""}
                    <Button variant={"contained"} color={"primary"} href={`/viewblog/${props.blog.blogPostID}`}>Read More</Button>
            </div>
        </div>
    );
};

export default PreviewBlog;
