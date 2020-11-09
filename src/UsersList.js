import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {User} from "./User";

class UsersList extends Component {
	state = {
		showNumGamesPlayed: true,
	}

	toggleNumGamesPlayed = () => {
		this.setState((currentState) => ({
			showNumGamesPlayed: !currentState.showNumGamesPlayed,
		}));
	};

	render() {
		const {users} = this.props;
		const {showNumGamesPlayed} = this.state;
		return (
			<div>
				{users.map(user => <User key={user.username} username={user.username}
				                         numGamesPlayed={user.numGamesPlayed} showNumGamesPlayed={showNumGamesPlayed}/>)}
				<button onClick={this.toggleNumGamesPlayed} className="smallButton">
					{showNumGamesPlayed ? 'Hide the Number of Games Played' : 'Show the Number of Games Played'}
				</button>
			</div>
		)
	}
}

UsersList.propTypes = {
	users: PropTypes.array.isRequired,
}

export default UsersList;
