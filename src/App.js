import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Nav from "./navbar/navbar.js";
import Homepage from './homepage/homepage.js';
import Header from './header/header.js';
import Footer from './footer/footer.js';
import Map from './map/map.js';
import Leaderboard from './leaderboard/leaderboard.js';
import Rules from './rules/rules.js';
import Chat from './chat/chat.js';
import PageNotFound from './shared/PageNotFound.js';
import BlogHome from "./blog/BlogHome";
import CreateBlog from "./blog/CreateBlog";
import React, {useEffect, useState} from "react";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import ViewBlog from "./blog/ViewBlog";
import Endpoints from "./utils/Endpoints";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#0ed862",
            contrastText: "#fff"
        },
        secondary: {
            main: "#d8550e",
            contrastText: "#fff"
        },
        error: {
            main: "#f44336",
            contrastText: "#fff"
        }
    },
    spacing: v => `${v}em`
});

// For testing purposes only
const authToken = "%7B%22token%22%3A%20%22766d66492834444475fba2a5b8260a222f14f2b85dec04775efa73c3cdf167385296ca8fc3a2aec3%22%2C%22userId%22%3A%221%22%7D";

function App() {
    const [auth, setAuth] = useState({loggedIn: false, admin: false, userID: 0});

    useEffect(() => {
        let token = "";
        try {
            token = JSON.stringify(JSON.parse(decodeURIComponent(authToken)));
        } catch (e) {}

        fetch(Endpoints.CHECKAUTH, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: token}
        )
            .then( (response) => response.json())
            .then((data) => {
                setAuth(data)
            })
            .catch ((err) => {console.log("something went wrong ", err)});
    }, []);

	return (
        <Router basename="/">
            <div className="App">
                <MuiThemeProvider theme={theme}>
                    <Header img="" />
                    <Nav />
                    <Switch>
                        <Route exact path="/">
                            <Homepage />
                        </Route>
                        <Route exact path="/blog">
                            <BlogHome auth={auth}/>
                        </Route>
                        <Route exact path="/createblog">
                            <CreateBlog auth={auth}/>
                        </Route>
                        <Route exact path="/leaderboards">
                            <Leaderboard />
                        </Route>
                        <Route exact path="/rules">
                            <Rules />
                        </Route>
                        <Route exact path="/chat">
                            <Chat />
                        </Route>
                        <Route exact path="/map">
                            <Map />
                        </Route>
                        <Route path="/viewblog/:id" component={ViewBlog}/>
                        <Route path="*">
                            <PageNotFound />
                        </Route>
                    </Switch>
                </MuiThemeProvider>
                <Footer />
            </div>
        </Router>
	);
}

export default App;
