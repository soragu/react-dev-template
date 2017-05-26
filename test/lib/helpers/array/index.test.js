import { expect } from 'chai';
import * as ArrayHelper from 'Library/helpers/array';
import * as Book from 'Fixtures/book';

describe('ArrayHelper', () => {
    describe('#select', () => {
        it('return empty by default', () => {
            const result = ArrayHelper.select();
            expect(result).eql([]);
        });

        describe('when array element match condition', () => {
            it('return result by condition', () => {
                const arr = Book.collection;
                const condition = {
                    id: 1,
                    name: 'Javasrcipt Hand Book',
                };
                const result = ArrayHelper.select(arr, condition);
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

        describe('when condition is empty', () => {
            it('return source array', () => {
                const arr = Book.collection;
                const result = ArrayHelper.select(arr, {});
                expect(result).to.eql(arr);
            });
        });
    });
});