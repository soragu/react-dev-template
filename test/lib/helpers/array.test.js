import { expect } from 'chai';
import * as ArrayHelper from 'Library/helpers/array';
import * as Book from 'Fixtures/book';

describe('ArrayHelper', () => {
    describe('select', () => {
        describe('when array element match condition', () => {
            it('return result by condition', () => {
                const arr = Book.collection;
                const result = ArrayHelper.select(arr, {
                    id: 1,
                    name: 'Javasrcipt Hand Book',
                });
                expect(result[0].id).to.eql(1);
                expect(result[0].name).to.eql('Javasrcipt Hand Book');
            });
        });

        describe('when array element not match condition', () => {
            it('return nothing', () => {
                const arr = Book.collection;
                const result = ArrayHelper.select(arr, {
                    id: 1,
                    name: 'test',
                });
                expect(result).to.eql([]);
            });
        });
    });
});