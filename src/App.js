import React from "react";
// import PropTypes from "prop-types";

class App extends React.Component {
	state = {
		count: 0,
	};

	add = () => {
		this.setState((current) => ({ count: current.count + 1 }));
	};

	minus = () => {
		this.setState((current) => ({ count: current.count - 1 }));
	};
	componentDidMount = () => {
		console.log("mounted");
	};
	componentDidUpdate = () => {
		console.log("updated");
	};
	componentWillMount = () => {
		console.log("disapper");
	};
	render() {
		console.log("I'm rendered");
		return (
			<div>
				<h1>This number is {this.state.count} </h1>
				<button onClick={this.add}>Add</button>
				<button onClick={this.minus}>Minus</button>
			</div>
		);
	}
}

export default App;
