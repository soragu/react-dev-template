import * as ObjectHelper from 'Library/helpers/object';
import { createReducer } from 'Reducers/utilities';

const initState = {};

function setQuery(queryState, query) {
    return ObjectHelper.update(queryState, query);
}

const queryReducer = createReducer(initState, {
    SET_QUERY: setQuery,
});

export default queryReducer;