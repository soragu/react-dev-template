import { expect } from 'chai';
import FilterTypes from 'Contants/FilterTypes';
import * as actionCreator from 'Actions/SearchPage/filter'
import filterReducer from 'Reducers/SearchPage/filter';

describe('SearchPage filterReducer', () => {
    it('return ALL by default', () => {
        const action = {
            type: '',
        };
        const result = filterReducer(undefined, action);
        expect(result).to.eql(FilterTypes.ALL);
    });

    it('handle SET_AVAILABLE_FILTER correctly', () => {
        const result = filterReducer(FilterTypes.ALL, 
            actionCreator.setAvailableFilter());
        expect(result).to.eql(FilterTypes.AVAILABLE);
    });
});