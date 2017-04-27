import { expect } from 'chai';
import * as actionCreator from 'Actions/SearchPage/filter';
import ActionTypes from 'Contants/ActionTypes';

describe('SearchPage Actions', () => {
    describe('setAvailableFilter', () => {
        it('return type and passed filter object', () => {
            const expected = {
                type: ActionTypes.SET_AVAILABLE_FILTER,
            };
            const result = actionCreator.setAvailableFilter();
            expect(result).to.eql(expected);
        });
    });
});
