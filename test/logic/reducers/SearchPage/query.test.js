import { expect } from 'chai';
import ActionTypes from "Contants/ActionTypes";
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
        const action = {
            type: ActionTypes.SET_QUERY,
            payload: { query },
        };
        const result = queryReducer({}, action);
        expect(result).to.eql(query);
    });
});
