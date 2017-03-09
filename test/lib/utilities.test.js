import { expect } from 'chai';
import Utilities from 'Library/utilities.js';

describe("sqrt", () => {

    it("4 square root is 2", () => {
        expect(Utilities.sqrt(4)).to.equal(2);
    });

    it("return error when parameter is negative number", () => {
        expect(()=> { Utilities.sqrt(-1); }).to.throw("negative number dose not have square root");
    });

});

