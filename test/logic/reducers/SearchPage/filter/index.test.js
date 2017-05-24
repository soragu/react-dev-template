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

    it('handle SET_FILTER correctly', () => {
        const result = filterReducer(FilterTypes.ALL, 
            actionCreator.setFilter(FilterTypes.AVAILABLE));
        expect(result).to.eql(FilterTypes.AVAILABLE);
    });
});