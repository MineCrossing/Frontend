import './App.css';
import Nav from "./navbar.js";
import Homepage from './homepage.js';
import Header from './header.js';

function App() {
	return (
		<div className="App">
			<Header />
			<Nav />
			<Homepage />
			{/* <header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
        		</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
        		</a>
			</header> */}
		</div>
	);
}

export default App;
