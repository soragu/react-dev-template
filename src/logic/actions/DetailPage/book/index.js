import { createAction } from 'redux-actions';
import ActionTypes from 'Contants/ActionTypes';

export const submitBookForm = createAction(ActionTypes.SUBMIT_BOOK_FORM);

// same as

// export function submitBookForm(book) {
//     return {
//         type: ActionTypes.SUBMIT_BOOK_FORM,
//         payload: { book },
//     }
// }