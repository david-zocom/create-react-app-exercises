import React from 'react';

class Number extends React.Component {
	render() {
		//throw new Error('unexpected error');
		return (<p>{this.props.value}</p>);
	}
}

// module.exports = Number;
export default Number;