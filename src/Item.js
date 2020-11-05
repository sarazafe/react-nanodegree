import React from 'react'
import PropTypes from 'prop-types'

const Item = (props) => {
	const {item} = props;
	return (
		<li>{item}</li>
	)
}
export default Item;

Item.propTypes = {
	item: PropTypes.string.isRequired,
}