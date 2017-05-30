import React, {Component} from 'react';

class MyForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.setState({
			text: event.target.value
		});
	}
	render() {
		return (
			<div>
				Type something: <br/>
				<input type="text"
					onChange={this.handleChange}
					value={this.state.text}
					/>
			</div>
		);
	}
}

export default MyForm;
