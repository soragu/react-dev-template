import ActionTypes from 'Contants/ActionTypes';

const initState = 'ALL';

function filterReducer(filterState = initState, { type }) {
    switch (type) {
        case ActionTypes.SET_AVAILABLE_FILTER:
            return 'AVAILABLE';
        default:
            return filterState;
    }
}

export default filterReducer;