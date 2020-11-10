import React, { Component } from 'react';
import PropTypes from 'prop-types'
import MessageForm from "./MessageForm";
import {Messages} from "./Messages";

class Chat extends Component {
	render() {
		const {username, messages, onSendMessage} = this.props;
		return (
			<div className="chat-window">
				<h2>Super Awesome Chat</h2>
				<div className="name sender">{username}</div>
				<Messages username={username} messages={messages}/>
				<MessageForm username={username} onSendMessage={onSendMessage}/>
			</div>
		);
	}
}

Chat.propTypes = {
	username: PropTypes.string.isRequired,
	messages: PropTypes.array.isRequired,
	onSendMessage: PropTypes.func.isRequired,
}

export default Chat;