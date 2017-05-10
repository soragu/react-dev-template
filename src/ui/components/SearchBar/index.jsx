import { Form, Button } from 'react-bootstrap';
import FieldGroup from 'Components/Common/Form/FieldGroup';
import FilterSelector from './FilterSelector';
// import Perf from 'react-addons-perf';

class SearchBar extends React.Component {
    handleClick() {
        console.log(`id:${this.idInput.value}, name:${this.nameInput.value}`);
    }

    handleChange(e) {
        switch (e.target.value) {
            case 'AVAILABLE':
                this.props.setAvailableFilter();
                this.props.filterAvailableBooks();
                break;
            case 'ALL':
                this.props.setAllFilter();
                this.props.filterAllBooks();
                break;
        }
    }

    render() {
        const {filter, query} = this.props;
        return (
            <Form inline>
                <FieldGroup
                    id="book-id-input"
                    type="text"
                    label="Id"
                    placeholder="Enter Book Id" 
                    inputRef={(ref) => {this.idInput = ref;}}
                />
                {' '}
                <FieldGroup
                    id="book-name-input"
                    type="text"
                    label="Name"
                    placeholder="Enter Book Name"
                    inputRef={(ref) => {this.nameInput = ref;}}
                />
                {' '}
                <Button 
                    bsStyle="primary" 
                    onClick={(e) => {this.handleClick(e);}}
                >
                    Search
                </Button>
                {' '}
                <FilterSelector 
                    id="filter-selector" 
                    value={filter} 
                    onChange={(e) => {this.handleChange(e)}}
                />
            </Form>
        );
    }
}

export default SearchBar;