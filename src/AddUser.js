import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AddUser extends Component {
	state = {
		user: {
			name: '',
			surname: '',
			username: '',
		},
		existingUser: false,
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
		const {onAddUser, users} = this.props;
		const {username} = this.state.user;
		const existingUser = users.findIndex(usr => usr.username === username) >= 0;
		this.setState(()=>({
			existingUser,
		}))
		if(!existingUser){
			onAddUser(this.state);
			this.setState({
				user: {
					name: '',
					surname: '',
					username: '',
				},
			});
			this.nameInput.focus();
		}
	};

	render() {
		const {user, existingUser} = this.state;
		const {name, surname, username} = user;
		return (<div>
			{existingUser && (
				<div className="error">The user already exists</div>
			)}
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
	users: PropTypes.array.isRequired,
};

export default AddUser;