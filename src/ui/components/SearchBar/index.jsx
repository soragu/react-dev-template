import { Form, Button } from 'react-bootstrap';
import FieldGroup from 'Components/Common/Form/FieldGroup';
import FilterSelector from './FilterSelector';

class SearchBar extends React.Component {

    handleFilterChange = (e) => {
        //Perf.start();
        this.props.setFilter(e.target.value);
    }

    // componentDidUpdate() {
    //     Perf.stop();
    //     Perf.printWasted();
    // }

    handleSearchClick = () => {
        const query = {
            id: parseInt(this.idInput.value),
            name: this.nameInput.value,
        };
        this.props.setQuery(query);
    }



    render() {
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

SearchBar.defaultProps = {
    setFilter: () => {},
    setQuery: () => {},
};

SearchBar.propTypes = {
    setFilter: React.PropTypes.func,
    setQuery: React.PropTypes.func,
};

export default SearchBar;