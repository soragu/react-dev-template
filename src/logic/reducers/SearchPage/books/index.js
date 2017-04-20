import ActionTypes from "Contants/ActionTypes";
import * as ArrayHelper from 'Library/helpers/array';

const initState = {
    books: []
};

function booksReducer(state = initState, { type, payload }) {
    switch (type) {
        case ActionTypes.SEARCH_BOOKS:
            const books = ArrayHelper.select(state.books, payload.params);
            return Object.assign({}, { books });
        default:
            return state;
    }
}

export default booksReducer;
