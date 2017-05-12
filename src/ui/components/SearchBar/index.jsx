import { Form, Button } from 'react-bootstrap';
import FieldGroup from 'Components/Common/Form/FieldGroup';
import FilterSelector from './FilterSelector';

class SearchBar extends React.Component {

    handleFilterChange = (e) => {
        Perf.start();
        this.props.setFilter(e.target.value);
    }

    componentDidUpdate() {
        Perf.stop();
        Perf.printWasted();
    }

    handleSearchClick = () => {
        console.log(`id:${this.idInput.value}, name:${this.nameInput.value}`);
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
                <FilterSelector 
                    id="filter-selector" 
                    value={filter} 
                    onChange={this.handleFilterChange}
                />
                {' '}
                <Button 
                    bsStyle="primary" 
                    onClick={this.handleSearchClick}
                >
                    Search
                </Button>
            </Form>
        );
    }
}

export default SearchBar;