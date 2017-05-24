import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import BookItem from 'Components/BookList/BookItem';

describe('<BookItem />', () => {
    const shallowCreator = (props) => {
        return shallow(<BookItem {...props} />);
    }

    it('is a <tr> tag', () => {
        const wrapper = shallowCreator();
        expect(wrapper.type()).to.eq('tr');
    });

    it('render 3 <td> elements', () => {
        const wrapper = shallowCreator();
        expect(wrapper.find('td')).to.have.length(3);
    });

    it('render content of <td> according to the props', () => {
        const props = {
            id: 5,
            name: 'test',
            stock: 10,
        };
        const wrapper = shallowCreator(props);
        expect(wrapper.find('td').at(0).text()).to.eql(props.id.toString());
        expect(wrapper.find('td').at(1).text()).to.eql(props.name);
        expect(wrapper.find('td').at(2).text()).to.eql(props.stock.toString());
    });
});
