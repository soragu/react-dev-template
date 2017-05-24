import { shallow } from 'enzyme';
import { Table } from 'react-bootstrap';
import BookList from 'Components/BookList';
import BookItem from 'Components/BookList/BookItem';
import { createCollection } from 'Fixtures/book';

describe('<BookList />', () => {
    const shallowCreator = (props) => {
        return shallow(<BookList {...props} />);
    }

    it('is a <Table />', () => {
        const wrapper = shallowCreator();
        expect(wrapper.type()).to.eql(Table);
    });

    it('render a <thead> tag', () => {
        const wrapper = shallowCreator();
        expect(wrapper.find('thead')).to.have.length(1);
    });

    it('render a <tbody> tag', () => {
        const wrapper = shallowCreator();
        expect(wrapper.find('tbody')).to.have.length(1);
    });

    it('render <th> correctly', () => {
        const wrapper = shallowCreator();
        expect(wrapper.find('th').at(0).text()).to.eql('#');
        expect(wrapper.find('th').at(1).text()).to.eql('Name');
        expect(wrapper.find('th').at(2).text()).to.eql('Stock');
    });

    it('render items according to props.items', () => {
        const items = createCollection(2);
        const wrapper = shallowCreator({items});
        expect(wrapper.children()).to.have.length(2);
        expect(wrapper.find(BookItem)).to.have.length(2);
    });
});