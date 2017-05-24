import { shallow } from 'enzyme';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import FieldGroup from 'Components/Common/Form/FieldGroup';

describe('<FieldGroup />', () => {
    const shallowCreator = (props) => {
        return shallow(<FieldGroup {...props} />);
    };

    it('is a <FormGroup />', () => {
        const wrapper = shallowCreator();
        expect(wrapper.type()).to.eql(FormGroup);
    });

    it('render a ControlLabel', () => {
        const wrapper = shallowCreator();
        expect(wrapper.find(ControlLabel)).to.have.length(1);
    });

    it('render a FormControl', () => {
        const wrapper = shallowCreator();
        expect(wrapper.find(FormControl)).to.have.length(1);
    });

    it('render controlId equal props.id', () => {
        const props = {
            id: 'testId1'
        }
        const wrapper = shallowCreator(props);
        expect(wrapper.prop('controlId')).to.eql(props.id);
    });

    it('render label according props.label', () => {
        const props = {
            id: 'testId1',
            label: 'testing'
        }
        const wrapper = shallowCreator(props);
        expect(wrapper.find(ControlLabel).render().text()).to.eql(props.label);
    });
});