/**
 * Created by dougiefresh49 on 2/1/16.
 */

var commons = require('./common-algorithms');

module.exports = {
    divisibleTriangleNumbers: divisibleTriangleNumbers,
    largestCollatzSequence: largestCollatzSequence
};

// TODO
// Problem 11: Largest Product In A Grid

// TODO: find better solution
// Problem 12:
function divisibleTriangleNumbers(numDivisors) {

    var i = 0,
        triangleNum,
        factors = 0;

    do {
        i++;
        triangleNum = commons.getTriangleNumber(i);
        factors = commons.getNumFactors(triangleNum);
    }
    while(factors < numDivisors);

    return triangleNum;
}

// TODO
// Problem 13: Large Sum

// Problem 14: Largest Collatz Sequence
function largestCollatzSequence(limit) {
    var longestCollatz = {
        startingNumber: 0,
        chainLength: 0
    };
    var iChain;

    for(var i = limit; i > 0; i--) {
        iChain = commons.getCollatzChain(i);

        if(iChain > longestCollatz.chainLength) {
            longestCollatz.chainLength = iChain;
            longestCollatz.startingNumber = i;
        }
    }

    return longestCollatz.startingNumber;
}