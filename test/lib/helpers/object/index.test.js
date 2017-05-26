import { expect } from 'chai';
import * as ObjectHelper from 'Library/helpers/object';

describe('ObjectHelper', () => {
    describe('#update', () => {
        it('update preObject with newValue', () => {
            const preObject = {
                id: 10,
                name: 'test',
            };
            const newValue = {
                name: 'test1',
                updateBy: 'test1',
            };
            const result = ObjectHelper.update(preObject, newValue);
            const expected = {
                id: 10,
                name: 'test1',
                updateBy: 'test1',
            };
            expect(result).to.eql(expected);
        });
    });

    describe('#cleanEmptyValues', () => {
        it('return new object without empty values', () => {
            const input = {
                id: null,
                name: '',
                test: 'test',
            };
            const result = ObjectHelper.cleanEmptyValues(input);
            expect(result).to.eql({test: 'test'});
        });
    });
});
