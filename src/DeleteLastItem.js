import React, {Component} from 'react'
import PropTypes from 'prop-types'

class DeleteLastItem extends Component {
	static propTypes = {
		deleteLastItem: PropTypes.func.isRequired,
		noItemsFound: PropTypes.func.isRequired,
	}
	
	render() {
		const {deleteLastItem, noItemsFound} = this.props;
		return (
			<button onClick={() => deleteLastItem()} disabled={noItemsFound()}>
				Delete Last Item
			</button>
		)
	}
}

export default DeleteLastItem;