import { expect } from 'chai';
import My from '../app/sqrt.js';

describe("sqrt", () => {

    it("4 square root is 2", () => {
        expect(My.sqrt(4)).to.equal(2);
    });

    it("return error when parameter is negative number", () => {
        expect(()=> { My.sqrt(-1); }).to.throw("negative number dose not have square root");
    });

});

