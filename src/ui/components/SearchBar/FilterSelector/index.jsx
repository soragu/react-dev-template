import { FormGroup, FormControl } from 'react-bootstrap';
import FilterTypes from 'Contants/FilterTypes';

class FilterSelector extends React.PureComponent {
    render(){
        const {id, onChange, ...props} = this.props
        return(
            <FormGroup controlId={id}>
                <FormControl 
                    componentClass="select" 
                    onChange={onChange}
                    defaultValue={FilterTypes.ALL} 
                    {...props}
                >
                    <option value={FilterTypes.ALL}>ALL</option>
                    <option value={FilterTypes.AVAILABLE}>AVAILABLE</option>
                    <option value={FilterTypes.UNAVAILABLE}>UNAVAILABLE</option>
                </FormControl>
            </FormGroup>
        );
    }
}

FilterSelector.propTypes = {
    id: React.PropTypes.string,
    onChange: React.PropTypes.func,
};

export default FilterSelector;