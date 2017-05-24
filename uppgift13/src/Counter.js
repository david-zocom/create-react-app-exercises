import React, { Component } from 'react';

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			number: 2
		}
	}
	render() {
		return <div>{this.state.number}</div>;
	}
}

export default Counter;
