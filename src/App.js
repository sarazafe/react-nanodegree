import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from "./Chat";

class App extends Component {
	state = {
		messages: [],
		users: [{username: 'Amy'}, {username: 'John'}]
	}

	onSendMessage = (newMessage)=>{
		this.setState(currentState => ({
			messages: [...currentState.messages, newMessage],
		}))
	}

	render() {
		const {users, messages} = this.state;
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<h1 className="App-title">ReactND - Coding Practice</h1>
				</header>
				<div className="container">
					<Chat username={users[0].username} messages={messages} onSendMessage={this.onSendMessage}/>
					<Chat username={users[1].username} messages={messages} onSendMessage={this.onSendMessage}/>
				</div>
			</div>
		);
	}
}

export default App;
