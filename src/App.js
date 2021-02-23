import './App.css';
import Nav from "./navbar/navbar.js";
import Homepage from './homepage/homepage.js';
import Header from './header/header.js';
import Footer from './footer/footer.js';

function App() {
	return (
		<div className="App">
			<Header />
			<Nav />
			<Homepage />

            <br />

            <Footer />
		</div>
	);
}

export default App;
