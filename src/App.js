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
import AuthUtils from "./utils/AuthUtils";

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
    const defaultAuthState = {loggedIn: false, admin: false, userID: 0};
    const [auth, setAuth] = useState(defaultAuthState);

    useEffect(() => {
        let token = AuthUtils.getAuthCookie();

        fetch(Endpoints.CHECK_AUTH, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: token}
        )
            .then( (response) => {
                if (response.status !== 200){
                    setAuth(defaultAuthState);
                    AuthUtils.processLogout();
                    return;
                }
                return response.json()
            })
            .then((data) => setAuth(data))
            .catch ((err) => {console.log("something went wrong ", err)});
    }, []);

    const handleLogout = () => {
        let token = null;
        try {
            token = JSON.stringify(JSON.parse(decodeURIComponent(Cookies.get('loginAuth'))));
        } catch (e) {}

        fetch(Endpoints.LOGOUT, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: token
        })
            .then( (response) => {
                setAuth(defaultAuthState);
                AuthUtils.processLogout();
            })
            .catch ((err) => {console.log("something went wrong ", err)});
    };

	return (
        <Router basename="/">
            <div className="App">
                <MuiThemeProvider theme={theme}>
                    <Header img=""/>
                    <Nav auth={auth} logout={handleLogout}/>
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
