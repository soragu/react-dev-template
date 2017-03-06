import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Hello from '../app/hello';

describe("<Hello />", ()=> {
    it("is h1", ()=> {
    	const wrapper = shallow(<Hello />);
        expect(wrapper.is('h1')).to.equal(true);
    });

    it("fill text base on props.name", ()=> {
    	const wrapper = shallow(<Hello name="tester" />);
    	expect(wrapper.text()).to.equal("Hello tester!")
    });
});