import './bloghome.css';
import React, {useState} from 'react';
import PreviewBlogsList from "../homepage/PreviewBlogsList";
import BlogFilterPicker from "./BlogFilterPicker";

const BlogHome = props => {
    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState(new Date().getMonth());
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const monthIntFromString = (month) => months.indexOf(month);
    const monthStringFromInt = (month) => months[month];

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
                        options={[2021, 2020]}
                        onClick={e => setYear(parseInt(e.target.innerText))}
                    />
                    <BlogFilterPicker
                        title={"Month"}
                        options={["January", "February", "March"]}
                        onClick={e => setMonth(monthIntFromString(e.target.innerText))}
                    />
                </section>
                <section className={"blog-home-blog-container"}>
                    <h2 className={"blog-subheader"}>{`Blogs from ${monthStringFromInt(month)}, ${year}`}</h2>
                    <span className={"separator"}> </span>
                    <PreviewBlogsList/>
                </section>
            </section>
        </main>
    );
};

export default BlogHome;
