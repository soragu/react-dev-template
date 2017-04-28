import ActionTypes from 'Contants/ActionTypes';

export function addBook(book) {
    return {
        type: ActionTypes.ADD_BOOK,
        payload: { book },
    }
}

export function searchBooks(params) {
    return {
        type: ActionTypes.SEARCH_BOOKS,
        payload: { params },
    }
}

export function filterAvailableBooks() {
    return {
        type: ActionTypes.FILTER_AVAILABLE_BOOKS,
    }
}
