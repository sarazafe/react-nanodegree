import React from 'react'
import PropTypes from 'prop-types'
import Item from "./Item";

const Items = (props) => {
	const {items} = props;
	return (
		<div>
			<p className="items">Items</p>
			<ol className="item-list">
				{items.map((item, index) => <Item item={item} key={index}/>)}
			</ol>
		</div>
	);
}
export default Items;

Items.propTypes = {
	items: PropTypes.array.isRequired,
}