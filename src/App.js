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
import Cookies from 'js-cookie';

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
    const [auth, setAuth] = useState({loggedIn: true, admin: true, userID: 0});
    //Cookies.set('loginAuth', "%7B%22token%22%3A%20%22a0ab66cc01fddd0d1d04e91706d21df3625e7d6d00fb37f131c3febbd9ffd50fb4b1ec8f9a17b4de%22%2C%22userId%22%3A%221%22%7D");
    console.log(Cookies?.get());

    useEffect(() => {
        let token = null;
        try {
            token = JSON.stringify(JSON.parse(decodeURIComponent(Cookies.get('loginAuth'))));
        } catch (e) {}

        fetch(Endpoints.CHECK_AUTH, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: token}
        )
            .then( (response) => {
                if (response.status !== 200){
                    setAuth({loggedIn: false, admin: false, userID: 0});
                    Cookies.remove("loginAuth");
                    return;
                }
                return response.json()
            })
            .then((data) => setAuth(data))
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
