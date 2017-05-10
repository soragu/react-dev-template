import { createAction } from 'redux-actions';
import ActionTypes from 'Contants/ActionTypes';

export const setAvailableFilter = createAction(ActionTypes.SET_AVAILABLE_FILTER);
export const setAllFilter = createAction(ActionTypes.SET_ALL_FILTER);