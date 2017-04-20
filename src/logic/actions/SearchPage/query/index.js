import ActionTypes from 'Contants/ActionTypes';

export function setQuery(query) {
    return {
        type: ActionTypes.SET_QUERY,
        payload: { query },
    }
}
