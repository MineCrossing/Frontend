import React, {useEffect, useState} from 'react';
import PreviewBlogsList from "../shared/PreviewBlogsList";
import BlogFilterPicker from "./BlogFilterPicker";
import Endpoints from "../utils/Endpoints";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    blogHome: {
        minHeight: "100vh",
        paddingTop: "2em"
    },
    blogHeaderContainer: {
        width: "80%",
        margin: "auto",
        [theme.breakpoints.down("xs")]: {
            width: "98%"
        }
    },
    blogHomeContent: {
        display: "flex",
        margin: "3em auto",
        width: "80%",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
        },
        [theme.breakpoints.down("xs")]: {
            width: "98%",
        },
    },
    blogHomeFilterContainer: {
        width: "15%",
        [theme.breakpoints.down("sm")]: {
            width: "80%",
            margin: theme.spacing(0, "auto", 1, "auto")
        },
    },
    blogHomeBlogContainer: {
        width: "80%",
        marginLeft: "auto",
        marginBottom: "1em",
        [theme.breakpoints.down("sm")]: {
            margin: "auto"
        },
    },
    blogSubheaderContainer: {
        display: "flex",
    },
    blogSubheader: {
        textAlign: "left",
        color: "#2c2c2c",
        margin: "0 auto 0 0",
        fontSize: "1.3em",
    },
}));

const BlogHome = props => {
    const classes = useStyles();
    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState(new Date().getMonth());
    const [blogs, setBlogs] = useState([]);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const monthIntFromString = (month) => months.indexOf(month);
    const monthStringFromInt = (month) => months[month];
    const getBlogDate = (date) => new Date(Date.parse(date));

    const getMonthOptions = (selectedYear) => [... new Set(blogs
        .filter(b => getBlogDate(b?.date).getFullYear() == (selectedYear ?? year))
        .map(b => monthStringFromInt(getBlogDate(b?.date).getMonth()))
        .sort((a, b) => monthIntFromString(a) - monthIntFromString(b))
    )];

    const handleYearChange = (year) => {
        setYear(parseInt(year));
        const monthOptions = getMonthOptions(year);
        if (monthOptions.length > 0 && !monthOptions.includes(monthStringFromInt(month)))
            setMonth(monthIntFromString(monthOptions[0]))
    };

    useEffect(() => {
        let isMounted = true;

        fetch(Endpoints.BLOG_POSTS_PREVIEW_ALL)
            .then( (response) => response.json() )
            .then( (data) => {
                if (isMounted) {
                    Promise.resolve(setBlogs(data))
                        .then(() => setYear(getBlogDate(data[0]?.date).getFullYear()))
                        .then(() => setMonth(getBlogDate(data[0]?.date).getMonth()));
                }
            })
            .catch ((err) => {console.log("something went wrong ", err)});

        return () => isMounted = false;
    }, []);

    const createBlogButton = props.auth?.admin ? <Button variant={"contained"} color={"secondary"} href={"/createblog"}>Create New</Button> : "";
    return (
        <main className={classes.blogHome}>
            <div className={classes.blogHeaderContainer}>
                <h1 className={"homepage-header"}>Developer Blogs</h1>
                <span className={"separator"}> </span>
            </div>
            <section className={classes.blogHomeContent}>
                <section className={classes.blogHomeFilterContainer}>
                    <BlogFilterPicker
                        title={"Year"}
                        selected={year}
                        options={[... new Set(blogs.map(b => getBlogDate(b?.date).getFullYear()))]}
                        onClick={e => handleYearChange(e.target.innerText)}
                    />
                    <BlogFilterPicker
                        title={"Month"}
                        selected={monthStringFromInt(month)}
                        options={getMonthOptions()}
                        onClick={e => setMonth(monthIntFromString(e.target.innerText))}
                    />
                </section>
                <section className={classes.blogHomeBlogContainer}>
                    <div className={classes.blogSubheaderContainer}>
                        <h2 className={classes.blogSubheader}>{`Blogs from ${monthStringFromInt(month)}, ${year}`}</h2>
                        {createBlogButton}
                    </div>
                    <span className={"separator"}> </span>
                    <PreviewBlogsList remove={(id) => setBlogs(blogs.filter(b => b.blogPostID !== id))} admin={props.auth?.admin ?? false} blogs={blogs?.filter(b => getBlogDate(b?.date).getMonth() === month && getBlogDate(b?.date).getFullYear() === year)}/>
                </section>
            </section>
        </main>
    );
};

export default BlogHome;
