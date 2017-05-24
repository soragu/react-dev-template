import { expect } from 'chai';
import * as actionCreator from 'Actions/SearchPage/books';
import ActionTypes from 'Contants/ActionTypes';
import * as Book from 'Fixtures/book';

describe('SearchPage Actions', () => {
    describe('addBook', () => {
        it('return type and passed book object', () => {
            const expected = {
                type: ActionTypes.ADD_BOOK,
                payload: Book.item,
            };
            const result = actionCreator.addBook(Book.item);
            expect(result).to.eql(expected);
        });
    });
});
