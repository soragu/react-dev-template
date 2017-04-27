import { expect } from 'chai';
import ActionTypes from "Contants/ActionTypes";
import booksReducer from 'Reducers/SearchPage/books';
import * as Book from 'Fixtures/book';

describe ('SearchPage booksReducer', () => {
    it('return empty array by default', () => {
        const action = {
            type: '',
        };
        const result = booksReducer(undefined, action);
        expect(result).to.eql([]);
    });

    it('handle ADD_BOOK correctly', () => {
        const action = {
            type: ActionTypes.ADD_BOOK,
            payload: {
                book: Book.item
            }
        };
        const result = booksReducer([], action);
        expect(result).to.eql([Book.item]);
    });

    it('handle SEARCH_BOOKS correctly', () => {
        const action = {
            type: ActionTypes.SEARCH_BOOKS,
            payload: {
                query: {
                    id: 1
                }
            }
        }
        const result = booksReducer(Book.collection, action);
        expect(result[0].id).to.eql(1);
    });
});