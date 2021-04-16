import React, {useEffect, useState} from 'react';
import './homepage.css';
import DiscoverCard from "./DiscoverCard";
import PreviewBlogsList from "../shared/PreviewBlogsList";
import Endpoints from "../utils/Endpoints";

function Homepage() {
    const [blogs, setBlogs] = useState([]);
    const [totalPlayers, setTotalPlayers] = useState(750 + Math.random() * 500);

    useEffect(() => {
        let isMounted = true;

        fetch(Endpoints.BLOG_POSTS_PREVIEW)
            .then( (response) => response.json() )
            .then( (data) => {
                if (isMounted)
                    setBlogs(data)
            })
            .catch ((err) => {console.log("something went wrong ", err)});

        setTimeout(() => setTotalPlayers(1000 + Math.random() * 120), 10000);
        return () => isMounted = false;
    }, []);

    return (
        <main id="homepage">
            <section id={"discover-container"}>
                    <h1 className={"homepage-header"}>Discover MineCrossing</h1>
                    <span className={"separator"}> </span>
                    <div className={"header-info-container"}>
                        <span className={"header-info"}>
                                <i className={"fas fa-user"}> </i>
                                <strong>{totalPlayers.toFixed(0)}</strong> Players Online
                            </span>
                        <span className={"header-info"}>
                        <i className={"fas fa-map-marker-alt"}> </i>
                        Server IP: <strong>192.168.0.1</strong>
                    </span>
                    </div>
                    <p className={"discover-intro"}>
                        MineCrossing is home to one of the fastest growing Minecraft servers of 2021 with thousands of unique daily players. Become part of the community
                        and discover the features that MineCrossing has to offer
                    </p>
                    <div className={"discover-card-flex"}>
                        <DiscoverCard
                            title={"store"}
                            link={"https://store.minecrossing.xyz"}
                            icon={"fas fa-shopping-cart"}
                            text={"Unlock cosmetics, power-ups, ranks and more"}
                        />
                        <DiscoverCard
                            title={"chat"}
                            link={"/chat"}
                            icon={"fas fa-comments"}
                            text={"Live, instant, two way chat from your browser to the server"}
                        />
                        <DiscoverCard
                            title={"leaderboards"}
                            link={"/leaderboards"}
                            icon={"fas fa-chart-bar"}
                            text={"Compete against friends for leaderboard rankings"}
                        />
                </div>
            </section>
            <section id={"latest-news"}>
                <h2 className={"homepage-header"}>Latest News</h2>
                <span className={"separator"}> </span>
                <PreviewBlogsList blogs={blogs}/>
            </section>
        </main>
    );
}

export default Homepage;
