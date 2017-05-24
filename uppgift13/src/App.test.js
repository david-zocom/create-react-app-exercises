import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('shallow render', () => {
	shallow(<App/>);
});
	
test('renders heading', () => {
	// <h1>Hello</h1>
	let wrapper = shallow(<App/>);
	let actual = wrapper.contains(<h1>Hello</h1>);
	let expected = true;
	expect(actual).toBe(expected);
})