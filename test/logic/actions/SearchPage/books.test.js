import { expect } from 'chai';
import * as actionCreator from 'Actions/SearchPage/books';
import ActionTypes from 'Contants/ActionTypes';
import * as Book from 'Fixtures/book';

describe('SearchPage Actions', () => {
    describe('addBook', () => {
        it('return type and passed book object', () => {
            const expected = {
                type: ActionTypes.ADD_BOOK,
                payload: {
                    book: Book.item
                }
            };
            const result = actionCreator.addBook(Book.item);
            expect(result).to.eql(expected);
        });
    });

    describe('searchBooks', () => {
        it('return type and passed params object', () => {
            const params = {
                id: 1
            };
            const expected = {
                type: ActionTypes.SEARCH_BOOKS,
                payload: { params }
            };
            const result = actionCreator.searchBooks(params);
            expect(result).to.eql(expected);
        });
    });

    describe('filterAvailableBooks', () => {
        it('return type', () => {
            const expected = {
                type: ActionTypes.FILTER_AVAILABLE_BOOKS,
            };
            const result = actionCreator.filterAvailableBooks();
            expect(result).to.eql(expected);
        });
    });
});
