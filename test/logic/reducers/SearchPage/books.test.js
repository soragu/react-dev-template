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

    it('handle SEARCH_BOOKS correctly', () => {
        const params = {
            id: 1,
        }
        const result = booksReducer(Book.collection, 
            actionCreator.searchBooks(params));
        expect(result[0].id).to.eql(1);
    });

    it('handle FILTER_AVAILABLE_BOOKS correctly', () => {
        const result = booksReducer(Book.collection, 
            actionCreator.filterAvailableBooks());
        const expected = Book.collection.filter((item) => {
            return item.stock > 0;
        });
        expect(result).to.eql(expected);
        expect(result[0].stock).to.above(0);
    });
});
