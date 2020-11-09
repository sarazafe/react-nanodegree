import React from 'react';
import {User} from "./User";

export const UsersList = ({users}) => {
	return (
		<div>
			{users.map(user => <User username={user.username} numGamesPlayed={user.numGamesPlayed}/>)}
		</div>
	)
};
