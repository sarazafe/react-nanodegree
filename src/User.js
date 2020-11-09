import React from "react";

export const User = ({username, numGamesPlayed}) => {
	return <p>{username} played {numGamesPlayed} games</p>;
}