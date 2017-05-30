import MyForm from './MyForm.js';
import React from 'react';
import { shallow } from 'enzyme';

describe('MyForm component', () => {
	// smoke test
	// initial value state.text
	// user can change state.text
	test('smoke test, shallow render', () => {
		shallow(<MyForm />);
	});
	
	test('initial value, state.text=""', () => {
		let wrapper = shallow(<MyForm />);
		let actual = wrapper.state('text');
		let expected = '';
		expect(actual).toBe(expected);
	});
	
	test('user can change state.text', () => {
		const input = 'David';
		let wrapper = shallow(<MyForm />);
		wrapper.find('input').simulate('change', {
			target: {
				value: input
			},
			type: 'change'
		});
		let actual = wrapper.state('text');
		expect(actual).toBe(input);
	})
});










