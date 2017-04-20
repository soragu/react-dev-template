import { expect } from 'chai';
import * as actionCreator from 'Actions/SearchPage/query';
import ActionTypes from 'Contants/ActionTypes';

describe('SearchPage Actions', () => {
    describe('setQuery', () => {
        it('return type and passed query object', () => {
            const query = {
                id: 1,
                name: 'test'
            };
            const expected = {
                type: ActionTypes.SET_QUERY,
                payload: { query }
            };
            const result = actionCreator.setQuery(query);
            expect(result).to.eql(expected);
        });
    });
});
