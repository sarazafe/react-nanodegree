import React from 'react';

const Game = props => {
	const {value1, value2, value3, proposedAnswer} = props;
	return (
		<div>
			<div className="equation">
				<p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
			</div>
			<button onClick={() => props.checkAnswer(true)}>True</button>
			<button onClick={() => props.checkAnswer(false)}>False</button>
		</div>
	)
}

export default Game;