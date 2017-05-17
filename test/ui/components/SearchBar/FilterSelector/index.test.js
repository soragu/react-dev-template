import { shallow } from 'enzyme';
import { FormGroup, FormControl } from 'react-bootstrap';
import FilterTypes from 'Contants/FilterTypes';
import FilterSelector from 'Components/SearchBar/FilterSelector';

describe('<FilterSelector />', () => {
    const shallowCreator = (props) => {
        return shallow(<FilterSelector {...props} />);
    };

    it('is a <FormGroup />', () => {
        const wrapper = shallowCreator();
        expect(wrapper.type()).to.eql(FormGroup);
    });

    it('render controllId accordding to props.id', () => {
        const wrapper = shallowCreator({id: 'test1'});
        expect(wrapper.find(FormGroup).prop('controlId')).to.eql('test1');
    });

    it('render a <FormControl />', () => {
        const wrapper = shallowCreator();
        expect(wrapper.find(FormControl)).to.have.length(1);
    });

    describe('<FormControl />', () => {
        it('is a select component', () => {
            const wrapper = shallowCreator();
            expect(wrapper.find(FormControl).prop('componentClass')).to.eql('select');
        });

        it('has a defaultValue FilterTypes.ALL', () => {
            const wrapper = shallowCreator();
            expect(wrapper.find(FormControl).prop('defaultValue')).to.eql(FilterTypes.ALL);
        });
    });
});