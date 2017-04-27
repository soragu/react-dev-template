import filterReducer from 'Reducers/SearchPage/filter';
import queryReducer from 'Reducers/SearchPage/query';
import booksReducer from 'Reducers/SearchPage/books';

const initState = {
    filter: 'ALL',
    query: {},
    books: [],
}

/* root reducer */
function searchPageReducer(state = initState, action) {
    return {
        filter: filterReducer(state.filter, action),
        query: queryReducer(state.query, action),
        books: booksReducer(state.books, action),
    };
}

export default searchPageReducer;