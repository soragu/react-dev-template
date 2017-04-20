import ActionTypes from 'Contants/ActionTypes';

export function submitBookForm(book) {
    return {
        type: ActionTypes.SUBMIT_BOOK_FORM,
        payload: { book },
    }
}
