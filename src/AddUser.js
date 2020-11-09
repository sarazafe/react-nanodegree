import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AddUser extends Component {
	state = {
		user: {
			name: '',
			surname: '',
			username: '',
		},
	}

	formIsIncomplete = () => {
		const {name, surname, username} = this.state.user;
		return !name || !surname || !username;
	};

	handleChange = event => {
		const {name, value} = event.target;
		this.setState((currentState) => ({
			user: {
				...currentState.user,
				[name]: value,
			}
		}));
	}

	addUser = event => {
		event.preventDefault();
		this.props.onAddUser(this.state);
		this.setState({
			user: {
				name: '',
				surname: '',
				username: '',
			},
		});
		this.nameInput.focus();
	};

	render() {
		const {name, surname, username} = this.state.user;
		return (<div>
			<form onSubmit={this.addUser}>
				<input
					type="text"
					placeholder="Name"
					value={name}
					name="name"
					ref={(input) => { this.nameInput = input; }}
					onChange={this.handleChange}
				/>
				<input
					type="text"
					placeholder="Surname"
					value={surname}
					name="surname"
					onChange={this.handleChange}
				/>
				<input
					type="text"
					placeholder="Username"
					value={username}
					name="username"
					onChange={this.handleChange}
				/>
				<button disabled={this.formIsIncomplete()}>Add</button>
			</form>
		</div>);
	}
}

AddUser.propTypes = {
	onAddUser: PropTypes.func.isRequired,
};

export default AddUser;