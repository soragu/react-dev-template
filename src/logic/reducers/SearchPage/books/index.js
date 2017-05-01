import * as ArrayHelper from 'Library/helpers/array';
import { createReducer } from 'Reducers/utilities';

const initState = [];

function addBook(booksState, book) {
    return booksState.concat(book);
}

function searchBooks(booksState, query) {
    return ArrayHelper.select(booksState, query);
}

function filterAvailableBooks(booksState) {
    return booksState.filter((item) => {
        return item.stock > 0;
    });
}

const booksReducer = createReducer(initState, {
    ADD_BOOK: addBook,
    SEARCH_BOOKS: searchBooks,
    FILTER_AVAILABLE_BOOKS: filterAvailableBooks,
});

// same as

// function booksReducer(booksState = initState, { type, payload }) {
//     switch (type) {
//         case ActionTypes.ADD_BOOK:
//             return addBook(booksState, payload);
//         case ActionTypes.SEARCH_BOOKS:
//             return searchBooks(booksState, payload);
//         case ActionTypes.FILTER_AVAILABLE_BOOKS:
//             return filterAvailableBooks(booksState);
//         default:
//             return booksState;
//     }
// }

export default booksReducer;
