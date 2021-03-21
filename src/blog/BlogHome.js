import './bloghome.css';
import React, {useEffect, useState} from 'react';
import PreviewBlogsList from "../homepage/PreviewBlogsList";
import BlogFilterPicker from "./BlogFilterPicker";
import Endpoints from "../utils/Endpoints";

const BlogHome = props => {
    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState(new Date().getMonth());
    const [blogs, setBlogs] = useState([]);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const monthIntFromString = (month) => months.indexOf(month);
    const monthStringFromInt = (month) => months[month];
    const getBlogDate = (date) => new Date(Date.parse(date));

    useEffect(() => {
            fetch(Endpoints.BLOG_POSTS_PREVIEW_ALL)
                .then( (response) => response.json() )
                .then( (data) => setBlogs(data))
                .catch ((err) => {console.log("something went wrong ", err)});
        }, []
    );

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
                        options={[... new Set(blogs.map(b => getBlogDate(b?.date).getFullYear()))]}
                        onClick={e => setYear(parseInt(e.target.innerText))}
                    />
                    <BlogFilterPicker
                        title={"Month"}
                        options={[... new Set(blogs
                            .filter(b => getBlogDate(b?.date).getFullYear() === year)
                            .map(b => monthStringFromInt(getBlogDate(b?.date).getMonth()))
                            .sort((a, b) => monthIntFromString(a) - monthIntFromString(b))
                        )]}
                        onClick={e => setMonth(monthIntFromString(e.target.innerText))}
                    />
                </section>
                <section className={"blog-home-blog-container"}>
                    <h2 className={"blog-subheader"}>{`Blogs from ${monthStringFromInt(month)}, ${year}`}</h2>
                    <span className={"separator"}> </span>
                    <PreviewBlogsList blogs={blogs?.filter(b => getBlogDate(b?.date).getMonth() === month && getBlogDate(b?.date).getFullYear() === year)}/>
                </section>
            </section>
        </main>
    );
};

export default BlogHome;
