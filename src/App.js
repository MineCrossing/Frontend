import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Nav from "./navbar/navbar.js";
import Homepage from './homepage/homepage.js';
import Header from './header/header.js';
import Footer from './footer/footer.js';
import Map from './map/map.js';
// import Leaderboard from './leaderboard/leaderboard.js';
import Rules from './rules/rules.js';
import Chat from './chat/chat.js';
import PageNotFound from './PageNotFound.js';
import BlogHome from "./blog/BlogHome";

function App() {
	return (
        <Router basename="/">
            <div className="App">
                <Header img="" />

                <Switch>
                    <Route exact path="/">
                        <Nav page="homepage" />
                        <Homepage />
                    </Route>
                    <Route exact path="/blog">
                        <Nav page="blog" />
                        <BlogHome/>
                    </Route>
                    <Route exact path="/leaderboards">
                        <Nav page="leaderboards" />
                        {/* <Leaderboard /> */}
                    </Route>
                    <Route exact path="/rules">
                        <Nav page="rules" />
                        <Rules />
                    </Route>
                    <Route exact path="/chat">
                        <Nav page="chat" />
                        <Chat />
                    </Route>
                    <Route exact path="/map">
                        <Nav page="map" />
                        <Map />
                    </Route>
                    <Route exact path="/login">
                        <Nav page="login" />
                        {/* <Login/> */}
                    </Route>
                    <Route path="*">
                        <PageNotFound/>
                    </Route>
                </Switch>

                <Footer />
            </div>
        </Router>
	);
}

export default App;
