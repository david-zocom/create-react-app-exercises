import React from 'react';
import { shallow } from 'enzyme';
import Number from './Number.js';


	test('renders without crashing', () => {
		shallow(<Number/>);
	});
	
	test('renders value in paragraph', () => {
		const num = 20;
		let wrapper = shallow(<Number value={num}/>);
		let actual = wrapper.contains(<p>{num}</p>);
		expect( actual ).toBe( true );
	});
	test('renders value', () => {
		const num = 20;
		let wrapper = shallow(<Number value={num}/>);
		let actual = wrapper.html().indexOf(''+num);
		expect( actual ).toBeGreaterThan( -1 );
	});










