import { expect } from 'chai';
import FilterTypes from 'Contants/FilterTypes';
import searchPageReducer from 'Reducers/SearchPage';

describe('SearchPage root reducer',() => {
    it('return init state when state is undifined', () => {
        const action = {
            type: '',
        };
        const expected = {
            filter:FilterTypes.ALL,
            query: {},
            books: [],
        };
        const result = searchPageReducer(undefined, action);
        expect(result).to.eql(expected);
    });
});