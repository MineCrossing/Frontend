import './bloghome.css';
import React, {useEffect, useState} from 'react';
import PreviewBlogsList from "../shared/PreviewBlogsList";
import BlogFilterPicker from "./BlogFilterPicker";
import Endpoints from "../utils/Endpoints";
import Button from "@material-ui/core/Button";

const BlogHome = props => {
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
                if (isMounted)
                    setBlogs(data);
            })
            .catch ((err) => {console.log("something went wrong ", err)});

        return () => isMounted = false;
    }, []);

    const createBlogButton = props.auth?.admin ? <Button variant={"contained"} color={"primary"} href={"/createblog"}>Create New</Button> : "";
    return (
        <main id={"blog-home"}>
            <div className={"blog-header-container"}>
                <h1 className={"homepage-header"}>Developer Blogs</h1>
                <span className={"separator"}> </span>
            </div>
            <section className={"blog-home-content"}>
                <section className={"blog-home-filter-container"}>
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
                <section className={"blog-home-blog-container"}>
                    <div className={"blog-subheader-container"}>
                        <h2 className={"blog-subheader"}>{`Blogs from ${monthStringFromInt(month)}, ${year}`}</h2>
                        {createBlogButton}
                    </div>
                    <span className={"separator"}> </span>
                    <PreviewBlogsList blogs={blogs?.filter(b => getBlogDate(b?.date).getMonth() === month && getBlogDate(b?.date).getFullYear() === year)}/>
                </section>
            </section>
        </main>
    );
};

export default BlogHome;
