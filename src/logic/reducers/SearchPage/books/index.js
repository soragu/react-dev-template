import ActionTypes from 'Contants/ActionTypes';
import * as ArrayHelper from 'Library/helpers/array';

const initState = [];

function addBook(booksState, book) {
    return booksState.concat(book);
}

function searchBooks(booksState, query) {
    return ArrayHelper.select(booksState, query);
}

function filterAvailableBooks(booksState){
    return booksState.filter((item) => {
        return item.stock > 0;
    });
}

function booksReducer(booksState = initState, { type, payload }) {
    switch (type) {
        case ActionTypes.ADD_BOOK:
            return addBook(booksState, payload.book);
        case ActionTypes.SEARCH_BOOKS:
            return searchBooks(booksState, payload.query);
        case ActionTypes.FILTER_AVAILABLE_BOOKS:
            return filterAvailableBooks(booksState);
        default:
            return booksState;
    }
}

export default booksReducer;
