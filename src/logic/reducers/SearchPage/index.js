import { combineReducers } from "redux";
import filterReducer from 'Reducers/SearchPage/filter';
import queryReducer from 'Reducers/SearchPage/query';
import booksReducer from 'Reducers/SearchPage/books';

const searchPageReducer = combineReducers({
    filter: filterReducer,
    query: queryReducer,
    books: booksReducer,
});

export default searchPageReducer;
