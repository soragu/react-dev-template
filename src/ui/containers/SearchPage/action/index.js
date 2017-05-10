import { bindActionCreators } from 'redux';
import { filterAvailableBooks, filterAllBooks, searchBooks } from 'Actions/SearchPage/books';
import { setAvailableFilter, setAllFilter } from 'Actions/SearchPage/filter';
import { setQuery } from 'Actions/SearchPage/query';

function bindActions(dispatch) {
    return bindActionCreators(
        { 
            filterAvailableBooks, 
            filterAllBooks, 
            searchBooks, 
            setAllFilter, 
            setAvailableFilter, 
            setQuery 
        },
        dispatch
    );
}

export default bindActions;
