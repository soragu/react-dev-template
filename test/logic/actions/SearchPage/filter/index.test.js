import { expect } from 'chai';
import * as actionCreator from 'Actions/SearchPage/filter';
import ActionTypes from 'Contants/ActionTypes';
import FilterTypes from 'Contants/FilterTypes';

describe('SearchPage Actions', () => {
    describe('setFilter', () => {
        it('return type and passed filter object', () => {
            const expected = {
                type: ActionTypes.SET_FILTER,
                payload: FilterTypes.AVAILABLE,
            };
            const result = actionCreator.setFilter(FilterTypes.AVAILABLE);
            expect(result).to.eql(expected);
        });
    });
});
