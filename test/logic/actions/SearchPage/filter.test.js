import { expect } from 'chai';
import * as actionCreator from 'Actions/SearchPage/filter';
import ActionTypes from 'Contants/ActionTypes';

describe('SearchPage Actions', () => {
    describe('setAvailableFilter', () => {
        it('return type and passed filter object', () => {
            const filter = 'AVAILABLE';
            const expected = {
                type: ActionTypes.SET_AVAILABLE_FILTER,
                payload: { filter }
            };
            const result = actionCreator.setAvailableFilter(filter);
            expect(result).to.eql(expected);
        });
    });
});
