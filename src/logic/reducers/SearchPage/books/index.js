import { createReducer } from 'Reducers/utilities';

const initState = [];

function addBook(booksState, book) {
    return booksState.concat(book);
}

const booksReducer = createReducer(initState, {
    ADD_BOOK: addBook,
});

export default booksReducer;
