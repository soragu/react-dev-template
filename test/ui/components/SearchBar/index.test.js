import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { Form, Button } from 'react-bootstrap';
import SearchBar from 'Components/SearchBar';
import FilterSelector from 'Components/SearchBar/FilterSelector';
import FieldGroup from 'Components/Common/Form/FieldGroup';

describe('<SearchBar />', () => {
    const shallowCreator = (props) => {
        return shallow(<SearchBar {...props} />);
    };

    const mountCreator = (props) => {
        return mount(<SearchBar {...props} />);
    };

    it('is a <Form />', () => {
        const wrapper = shallowCreator();
        expect(wrapper.type(Form)).to.eql(Form)
    });

    it('render 2 <FieldGroup />', () => {
        const wrapper = shallowCreator();
        expect(wrapper.find(FieldGroup)).to.have.length(2);
    });

    it('render 1 <FilterSelector />', () => {
        const wrapper = shallowCreator();
        expect(wrapper.find(FilterSelector)).to.have.length(1);
    });

    it('render 1 <Button />', () => {
        const wrapper = shallowCreator();
        expect(wrapper.find(Button)).to.have.length(1);
    });

    describe('Refs', () => {
        it('has a idInput', () => {
            const wrapper = mountCreator();
            const component = wrapper.instance();
            expect(component.idInput.id).to.eql('book-id-input');
        });

        it('has a nameInput', () => {
            const wrapper = mountCreator();
            const component = wrapper.instance();
            expect(component.nameInput.id).to.eql('book-name-input');
        });
    });

    describe('#handleFilterChange', () => {
        it('be called when <FilterSelector /> onChange', () => {
            const wrapper = shallowCreator();
            const component = wrapper.instance();
            sinon.stub(component, 'handleFilterChange').callsFake(() => {
                return;
            });
            component.forceUpdate();
            wrapper.find(FilterSelector).simulate('change');
            expect(component.handleFilterChange).to.have.been.called;
        });

        it('call props.setFilter', () => {
            const wrapper = mountCreator();
            const component = wrapper.instance();
            const mockEvent = {
                target: {
                    value: 'test'
                }
            };
            component.handleFilterChange(mockEvent);
            expect(component.props.setFilter).to.have.been.called;
        });
    });

    describe('#handleSearchClick', () => {
        it('be called when <Button /> onClick', () => {
            const wrapper = shallowCreator();
            const component = wrapper.instance();
            sinon.stub(component, 'handleSearchClick').callsFake(() => {
                return;
            });
            component.forceUpdate();
            wrapper.find(Button).simulate('click');
            expect(component.handleSearchClick).to.have.been.called;
        });

        it('call props.setQuery', () => {
            const wrapper = mountCreator();
            const component = wrapper.instance();
            component.handleSearchClick();
            expect(component.props.setQuery).to.have.been.called;
        });
    });
});