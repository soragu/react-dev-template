import FilterTypes from 'Contants/FilterTypes';
import { createReducer } from 'Reducers/utilities';

const initState = FilterTypes.ALL;

const filterReducer = createReducer(initState, {
    SET_AVAILABLE_FILTER: () => {
        return FilterTypes.AVAILABLE; },
});

export default filterReducer;
