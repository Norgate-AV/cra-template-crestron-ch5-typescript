import React from "react";
import reactLogo from "./logo.svg";
import ch5Logo from "./assets/crestron-ch5-logo.png";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<div className="logo-container">
					<img
						src={reactLogo}
						className="react-logo"
						alt="react-logo"
					/>
					<p>+</p>
					<div className="ch5-logo">
						<img src={ch5Logo} alt="crestron-ch5-logo" />
					</div>
				</div>
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
