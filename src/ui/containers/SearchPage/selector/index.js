import { createSelector } from 'reselector';
import FilterTypes from 'Contants/FilterTypes';

const getFilter = (state) => {
    return state.filter;
};

const getBooks = (state) => {
    return state.books;
};

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

export default getVisibleBooks;