import { createAction } from 'redux-actions';
import ActionTypes from 'Contants/ActionTypes';

export const addBook = createAction(ActionTypes.ADD_BOOK);

export const searchBooks = createAction(ActionTypes.SEARCH_BOOKS);

export const filterAvailableBooks = createAction(ActionTypes.FILTER_AVAILABLE_BOOKS);

export const filterAllBooks = createAction(ActionTypes.FILTER_ALL_BOOKS);
