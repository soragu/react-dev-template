import { expect } from 'chai';
import * as actionCreator from 'Actions/DetailPage/book';
import ActionTypes from 'Contants/ActionTypes';
import * as Book from 'Fixtures/book';

describe('DetailPage Actions', () => {
    describe('submitBookForm', () => {
        it('return type and passed book object', () => {
            const expected = {
                type: ActionTypes.SUBMIT_BOOK_FORM,
                payload: Book.item,
            };
            const result = actionCreator.submitBookForm(Book.item);
            expect(result).to.eql(expected);
        });
    });
});
