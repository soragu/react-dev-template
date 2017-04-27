import { expect } from 'chai';
import ActionTypes from "Contants/ActionTypes";
import filterReducer from 'Reducers/SearchPage/filter';

describe('SearchPage filterReducer', () => {
    it('return ALL by default', () => {
        const action = {
            type: '',
        };
        const result = filterReducer(undefined, action);
        expect(result).to.eql('ALL');
    });

    it('handle SET_AVAILABLE_FILTER correctly', () => {
        const action = {
            type: ActionTypes.SET_AVAILABLE_FILTER,
        };
        const result = filterReducer('ALL', action);
        expect(result).to.eql('AVAILABLE');
    });
});