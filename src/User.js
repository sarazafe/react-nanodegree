import React from "react";

export const User = ({username, numGamesPlayed, showNumGamesPlayed}) => {
	return <p>{username} played {showNumGamesPlayed ? numGamesPlayed : '*'} games</p>;
}