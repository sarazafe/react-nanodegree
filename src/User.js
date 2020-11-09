import React from "react";

export const User = ({username, numGamesPlayed}) => {
	return <p key={username}>{username} played {numGamesPlayed} games</p>;
}