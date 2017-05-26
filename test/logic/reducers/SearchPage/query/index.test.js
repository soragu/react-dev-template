import { expect } from 'chai';
import * as actionCreator from 'Actions/SearchPage/query';
import queryReducer from 'Reducers/SearchPage/query';

describe('SearchPage queryReducer', () => {
    it('return empty object by default', () => {
        const action = {
            type: '',
        };
        const result = queryReducer(undefined, action);
        expect(result).to.eql({});
    });

    it('handle SET_QUERY correctly', () => {
        const query = {
            id: 1
        };
        const result = queryReducer({id: 2}, actionCreator.setQuery(query));
        expect(result).to.eql(query);
    });

    it('cleanEmptyValues', () => {
        const query = {
            id: null,
            name: '',
        };
        const result = queryReducer({id: 2}, actionCreator.setQuery(query));
        expect(result).to.eql({});
    });
});
