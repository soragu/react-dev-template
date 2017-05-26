import { createSelector } from 'reselect';
import FilterTypes from 'Contants/FilterTypes';
import * as ArrayHelper from 'Library/helpers/array';

const getFilter = (state) => {
    return state.filter;
};

const getBooks = (state) => {
    return state.books;
};

const getQuery = (state) => {
    return state.query;
}

const getVisibleBooks = createSelector(
    [getFilter, getBooks],
    (filter, books) => {
        switch (filter) {
            case FilterTypes.ALL:
                return books;
            case FilterTypes.AVAILABLE:
                return books.filter((t) => {
                    return t.stock > 0;
                });
            case FilterTypes.UNAVAILABLE:
                return books.filter((t) => {
                    return t.stock === 0;
                });
        }
    }
);

export const getVisibleBooksWithQuery = createSelector(
    [getVisibleBooks, getQuery],
    (books, query) => {
        return ArrayHelper.select(books, query);
    }
);