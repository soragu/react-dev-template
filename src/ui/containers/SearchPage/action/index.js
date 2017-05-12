import { bindActionCreators } from 'redux';
import { setFilter } from 'Actions/SearchPage/filter';
import { setQuery } from 'Actions/SearchPage/query';

function bindActions(dispatch) {
    return bindActionCreators(
        { 
            setFilter,
            setQuery,
        },
        dispatch
    );
}

export default bindActions;
