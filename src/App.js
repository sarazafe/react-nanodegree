import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {


	constructor() {
		super();
		const value1 = Math.floor(Math.random() * 100);
		const value2 = Math.floor(Math.random() * 100);
		const value3 = Math.floor(Math.random() * 100);
		this.state = {
			value1: value1,
			value2: value2,
			value3: value3,
			proposedAnswer: Math.floor(Math.random() * 3) + value1 + value2 + value3,
			numQuestions: 0,
			numCorrect: 0,
		}
	}

	checkAnswer = isEqual => {
		const {proposedAnswer, value1, value2, value3} = this.state;
		if ((isEqual && proposedAnswer === (value1 + value2 + value3))
			|| (!isEqual && proposedAnswer !== (value1 + value2 + value3))) {
			this.setState((currentState) => ({
				numCorrect: currentState.numCorrect + 1
			}))
		}
		this.generateNewQuestion();
	}

	generateNewQuestion = ()=>{
		const value1 = Math.floor(Math.random() * 100);
		const value2 = Math.floor(Math.random() * 100);
		const value3 = Math.floor(Math.random() * 100);
		const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
		this.setState((currentState) =>({
			value1,
			value2,
			value3,
			proposedAnswer,
			numQuestions: currentState.numQuestions +1,
		}));
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<h1 className="App-title">ReactND - Coding Practice</h1>
				</header>
				<div className="game">
					<h2>Mental Math</h2>
					<div className="equation">
						<p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
					</div>
					<button onClick={() => this.checkAnswer(true)}>True</button>
					<button onClick={() => this.checkAnswer(false)}>False</button>
					<p className="text">
						Your Score: {this.state.numCorrect}/{this.state.numQuestions}
					</p>
				</div>
			</div>
		);
	}
}

export default App;
