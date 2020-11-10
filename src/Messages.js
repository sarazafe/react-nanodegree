import React from "react";
import PropTypes from 'prop-types';

export const Messages = ({messages, username}) => {
	return (
		<ul className="message-list">
			{messages.map((message, index) => (
				<li
					key={index}
					className={
						message.username === username ? 'message sender' : 'message recipient'
					}
				>
					<p>{`${message.username}: ${message.message}`}</p>
				</li>
			))}
		</ul>
	);
}

Messages.propTypes = {
	messages: PropTypes.array.isRequired,
	username: PropTypes.object.isRequired,
};