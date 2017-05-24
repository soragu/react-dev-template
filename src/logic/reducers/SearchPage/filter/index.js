import FilterTypes from 'Contants/FilterTypes';
import { createReducer } from 'Reducers/utilities';

const initState = FilterTypes.ALL;

function setFilter(filterState, filter) {
    return filter; 
}

const filterReducer = createReducer(initState, {
    SET_FILTER: setFilter,
});

export default filterReducer;
