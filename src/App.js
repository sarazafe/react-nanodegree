import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddItemForm from "./AddItemForm";
import DeleteLastItem from "./DeleteLastItem";
import Items from "./Items";

class App extends React.Component {
	state = {
		value: '',
		items: [],
	};

	addItem = (event, item) => {
		event.preventDefault();
		this.setState(oldState => ({
			items: [...oldState.items, item],
		}));
	};

	deleteLastItem = () => {
		this.setState(() => ({items: this.state.items.slice(0, -1)}));
	};

	noItemsFound = () => {
		return this.state.items.length === 0;
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<h1 className="App-title">ReactND - Coding Practice</h1>
				</header>
				<h2>Shopping List</h2>
				<AddItemForm addItem={this.addItem} />
				<DeleteLastItem deleteLastItem={this.deleteLastItem} noItemsFound={this.noItemsFound}/>
				<Items items={this.state.items}/>
			</div>
		);
	}
}

export default App;
