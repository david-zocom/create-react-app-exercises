import Counter from './Counter.js';
import React from 'react';
import { shallow } from 'enzyme';

describe('Counter component test suite', () => {
	// initial value: 2
	// om increase fungerar
	// om decrease fungerar
	// - om värdet är större än noll
	// - värdet är noll eller mindre
	test('initial value: 2', () => {
		let wrapper = shallow(<Counter />);
		let actual = wrapper.state('number');
		let expected = 2;
		expect(actual).toBe(expected);
		
		let index = wrapper.html().indexOf(expected);
		expect( index ).toBeGreaterThan( -1 );
	})
})
