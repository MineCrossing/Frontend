import './previewblog.css';
import React from "react";
import Button from "@material-ui/core/Button";

const PreviewBlog = props => {
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
            <p className={"preview-blog-preview"}>{props.blog.preview.replace(/[&\/\\#+()$~%:*<>{}]/g,'')} ...</p>
            <Button className={"read-more-button"} variant={"contained"} color={"primary"} href={`/viewblog/${props.blog.blogPostID}`}>Read More</Button>
        </div>
    );
};

export default PreviewBlog;
