import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	state = {
		message: '',
	};
	updateMessage = (message) => {
		this.setState(() => ({
			message,
		}))
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<h1 className="App-title">ReactND - Coding Practice</h1>
				</header>
				<div className="container">
					<input
						type='text'
						placeholder='Say Something'
						value={this.state.message}
						onChange={(event) => this.updateMessage(event.target.value)}/>
					<p className="echo">Echo:</p>
					<p>{this.state.message}</p>
					<p>This should mirror the text you typed into the input field.</p>
				</div>
			</div>
		);
	}
}

export default App;
