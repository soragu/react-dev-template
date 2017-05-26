import { createReducer } from 'Reducers/utilities';
import * as ObjectHelper from 'Library/helpers/object';

const initState = {};

function setQuery(queryState, query) {
    const newQuery = ObjectHelper.cleanEmptyValues(query);
    return newQuery;
}

const queryReducer = createReducer(initState, {
    SET_QUERY: setQuery,
});

export default queryReducer;