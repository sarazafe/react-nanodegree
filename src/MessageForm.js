import React, {Component} from 'react';
import PropTypes from "prop-types";

class MessageForm extends Component {
	state = {
		message: '',
	}
	isDisabled = () => {
		return !this.state.message;
	};

	handleChange = (event) => {
		const {value} = event.target;
		this.setState(() => ({
			message: value,
		}));
	}

	handleOnSubmit = (event) => {
		event.preventDefault();
		const {username, onSendMessage} = this.props;
		const {message} = this.state;
		onSendMessage({
			username,
			message,
		});
		this.setState(() => ({
				message: '',
			})
		)
	}

	render() {
		const {message} = this.state;
		return (<div>
			<form className="input-group" onSubmit={this.handleOnSubmit}>
				<input type="text" className="form-control" placeholder="Enter your message..."
				       value={message}
				       name={message}
				       onChange={this.handleChange}
				/>
				<div className="input-group-append">
					<button className="btn submit-button" disabled={this.isDisabled()}>
						SEND
					</button>
				</div>
			</form>
		</div>)
	}
}

MessageForm.propTypes = {
	username: PropTypes.string.isRequired,
	onSendMessage: PropTypes.func.isRequired,
}
export default MessageForm;