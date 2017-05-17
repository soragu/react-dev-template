import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

function FieldGroup({ id, label, ...props}) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            {' '}
            <FormControl {...props} />
        </FormGroup>
    );
}

FieldGroup.propTypes = {
    id: React.PropTypes.string,
    label: React.PropTypes.string,
};

export default FieldGroup;