import Utilities from 'Library/utilities.js';
import { SQUARE_ROOT } from '../actions/my_form_actions.js';

function utilitiesReducer(state = { result: '' }, action) {
    switch (action.type) {
        case SQUARE_ROOT:
            return { result: Utilities.sqrt(action.payload) };
        default:
            return state;
    }
}

export default utilitiesReducer;
