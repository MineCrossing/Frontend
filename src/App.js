import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Nav from "./navbar/navbar.js";
import Homepage from './homepage/homepage.js';
import Header from './header/header.js';
import Footer from './footer/footer.js';
import Map from './map/map.js';
import Leaderboard from './leaderboard/leaderboard.js';
import Rules from './rules/rules.js';
import Chat from './chat/chat.js';
import PageNotFound from './PageNotFound.js';
import BlogHome from "./blog/BlogHome";
import CreateBlog from "./blog/CreateBlog";
import React from "react";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import ViewBlog from "./blog/ViewBlog";

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

function App() {
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
                            <BlogHome />
                        </Route>
                        <Route exact path="/createblog">
                            <CreateBlog />
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
