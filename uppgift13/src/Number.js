import React from 'react';

class Number extends React.Component {
	render() {
		return (<p>{this.props.value}</p>);
	}
}

// module.exports = Number;
export default Number;