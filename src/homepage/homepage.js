import React from 'react';
import './homepage.css';
import DiscoverCard from "./DiscoverCard";
import PreviewBlogsList from "./PreviewBlogsList";

function Homepage() {
    return (
        <main id="homepage">
            <section id={"discover-container"}>
                    <h1 className={"homepage-header"}>Discover MineCrossing</h1>
                    <span className={"separator"}> </span>
                    <p className={"discover-intro"}>
                        MineCrossing is home to one of the fastest growing Minecraft servers of 2021 with thousands of unique daily players. Become part of the community
                        and discover the features that MineCrossing has to offer
                    </p>
                    <div className={"discover-card-flex"}>
                        <DiscoverCard
                            title={"store"}
                            icon={"fas fa-shopping-cart"}
                            text={"Unlock cosmetics, power-ups, ranks and more"}
                        />
                        <DiscoverCard
                            title={"chat"}
                            icon={"fas fa-comments"}
                            text={"Live, instant, two way chat from your browser to the server"}
                        />
                        <DiscoverCard
                            title={"leaderboards"}
                            icon={"fas fa-chart-bar"}
                            text={"Compete against friends for leaderboard rankings"}
                        />
                </div>
            </section>
            <section id={"latest-news"}>
                <h2 className={"homepage-header"}>Latest News</h2>
                <span className={"separator"}> </span>
                <PreviewBlogsList/>
            </section>
        </main>
    );
}

export default Homepage;
