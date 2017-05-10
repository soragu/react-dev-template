import { FormGroup, FormControl } from 'react-bootstrap';

function FilterSelector({id, value, onChange, ...props}) {
    return(
        <FormGroup controlId={id}>
            <FormControl 
                componentClass="select" 
                value={value} 
                onChange={onChange} 
                {...props}
            >
                <option value="ALL">ALL</option>
                <option value="AVAILABLE">AVAILABLE</option>
                <option value="UNAVAILABLE">UNAVAILABLE</option>
            </FormControl>
        </FormGroup>
    );
}

export default FilterSelector;