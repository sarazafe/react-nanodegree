import React, {Component} from 'react'
import PropTypes from 'prop-types'

class AddItemForm extends Component {
	static propTypes = {
		addItem: PropTypes.func.isRequired,
	}

	state = {
		item: '',
	}

	inputIsEmpty = () => {
		return this.state.value === '';
	};

	handleChange = event => {
		this.setState({item: event.target.value});
	};

	handleSubmit = (event, addItemFn) => {
		addItemFn(event, this.state.item);
		this.setState(()=>({
			item: ''
		}))
	};

	render() {
		const {item} = this.state;
		const {addItem} = this.props;
		return (
			<form onSubmit={(event) => this.handleSubmit(event, addItem)}>
				<input
					type="text"
					placeholder="Enter New Item"
					value={item}
					onChange={(event) => this.handleChange(event)}
				/>
				<button disabled={this.inputIsEmpty()}>Add</button>
			</form>
		);
	}
}

export default AddItemForm;