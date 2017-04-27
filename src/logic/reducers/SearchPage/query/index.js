import ActionTypes from 'Contants/ActionTypes';
import * as ObjectHelper from 'Library/helpers/object';

const iniState = {};

function setQuery(queryState, query) {
    return ObjectHelper.update(queryState, query);
}

function queryReducer(queryState = iniState, { type, payload }) {
    switch (type) {
        case ActionTypes.SET_QUERY:
            return setQuery(queryState, payload.query);
        default:
            return queryState;
    }
}

export default queryReducer;