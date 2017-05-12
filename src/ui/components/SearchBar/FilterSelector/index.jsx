import { FormGroup, FormControl } from 'react-bootstrap';
import FilterTypes from 'Contants/FilterTypes';

function FilterSelector({id, value, onChange, ...props}) {
    return(
        <FormGroup controlId={id}>
            <FormControl 
                componentClass="select" 
                value={value} 
                onChange={onChange} 
                {...props}
            >
                <option value={FilterTypes.ALL}>ALL</option>
                <option value={FilterTypes.AVAILABLE}>AVAILABLE</option>
                <option value={FilterTypes.UNAVAILABLE}>UNAVAILABLE</option>
            </FormControl>
        </FormGroup>
    );
}

export default FilterSelector;