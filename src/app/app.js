import React, { Component } from 'react';
import logo from '../assets/react-logo.svg';

class App extends Component {
	render() {
		return (
			<div className="app-wrapper">
				<h1>App Works!</h1>
				<img src="./src/assets/react-logo.svg" className="app-logo" alt="React Logo" />
			</div>
		);
	}
}

export default App;
