import ActionTypes from 'Contants/ActionTypes';

export function setAvailableFilter(filter) {
    return {
        type: ActionTypes.SET_AVAILABLE_FILTER,
        payload: { filter },
    }
}
