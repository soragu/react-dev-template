import { expect } from 'chai';
import ActionTypes from 'Contants/ActionTypes';
import { createReducer } from 'Reducers/utilities';

describe('Reducer untilities', () => {
    describe('createReducer', () => {
        let action;

        before(() => {
            action = {
                type: ActionTypes.SET_QUERY,
                payload: {
                    id: 1,
                }
            };
        });

        describe('when action type is match', () => {
            it('call the passed function', () => {
                const reducer = createReducer('TEST', {
                    SET_QUERY: () => {
                        return 'MATCH';
                    },
                });
                const result = reducer(undefined, action);
                expect(result).to.eql('MATCH');
            });
        });

        describe('when action type is not match', () => {
            it('return initState', () => {
                const reducer = createReducer('TEST', {
                    SET_OTHER_QUERY: () => {
                        return 'MATCH';
                    },
                });
                const result = reducer(undefined, action);
                expect(result).to.eql('TEST');
            });
        });
    });
});
