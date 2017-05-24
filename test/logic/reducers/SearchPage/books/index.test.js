import { expect } from 'chai';
import * as actionCreator from 'Actions/SearchPage/books';
import booksReducer from 'Reducers/SearchPage/books';
import * as Book from 'Fixtures/book';

describe('SearchPage booksReducer', () => {
    it('return empty array by default', () => {
        const action = {
            type: '',
        };
        const result = booksReducer(undefined, action);
        expect(result).to.eql([]);
    });

    it('handle ADD_BOOK correctly', () => {
        const result = booksReducer([], actionCreator.addBook(Book.item));
        expect(result).to.eql([Book.item]);
    });
});
