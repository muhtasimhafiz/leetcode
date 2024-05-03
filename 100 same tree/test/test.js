'use strict';


const arrayToBinary = require('../../DSA/TEST_HELPER/arrayToBinary.js');
var assert = require('assert');
const method = require('../index.js');

describe('Tests', () => {
    // it('1', () => {
    //     let arr1 = [1,2,3]
    //     let arr2 = [1,2,3]

    //     let root1 =  arrayToBinary(arr1);
    //     let root2 =  arrayToBinary(arr2)
    //     assert.equal(method(root1, root2),true);
    // });
    it('2', () => {
        let arr1 = [1,2]
        let arr2 = [1,null,2]

        let root1 = new arrayToBinary(arr1);
        let root2 = new arrayToBinary(arr2)
        assert.equal(method(root1, root2),false);
    });
});
