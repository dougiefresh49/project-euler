/**
 * Created by dougiefresh49 on 2/1/16.
 */

var commons = require('./common-algorithms'),
    bigInt = require("big-integer");

module.exports = {
    largestProductInGrid: largestProductInGrid,
    divisibleTriangleNumbers: divisibleTriangleNumbers,
    largeSum: largeSum,
    largestCollatzSequence: largestCollatzSequence,
    powerDigitSum: powerDigitSum
};

// Problem 11: Largest Product In A Grid
// Solution based off of the following python implementation
// SO: http://codereview.stackexchange.com/questions/37767/largest-product-in-a-grid
function largestProductInGrid(grid, numAdjacent) {
    var largestProduct = 1,
        currentProduct = 1;

    function isInBounds(start, direction) {
        return 0 <= start.y
            && start.y < grid.length
            && start.y + (numAdjacent - 1)*(direction.y) < grid.length
            && 0 <= start.x
            && start.x < grid[start.y].length
            && start.x + (numAdjacent - 1)*(direction.x) < grid[start.y].length;
    }

    function getProduct(start, direction) {
        currentProduct = 1;
        for(var n = 0; n < numAdjacent; n++){
            currentProduct *= grid[start.y + n*direction.y][start.x + n*direction.x];
        }
        return currentProduct;
    }

    function getProductInDirection(start, direction) {
        return isInBounds(start, direction) ? getProduct(start, direction) : 0;
    }

    // loop through the grid
    grid.forEach(function (row, y) {
        row.forEach(function (col, x) {
            // save the largest product in a direction (up, down, right diagonal, left diagonal)
            largestProduct = Math.max(
                getProductInDirection({x: x, y: y}, {x: 1, y: 0}),
                getProductInDirection({x: x, y: y}, {x: 0, y: 1}),
                getProductInDirection({x: x, y: y}, {x: 1, y: 1}),
                getProductInDirection({x: x, y: y+3}, {x: 1, y: -1}),
                largestProduct
            );
        })
    });

    return largestProduct;
}

// Problem 12:
// Solution was optimized / refactored based off of the post at
// http://codereview.stackexchange.com/questions/74895/project-euler-problem-12-triangle-number-with-500-divisors
function divisibleTriangleNumbers(numDivisors) {
    var i = 1,
        triangleNum,
        factors = 0;

    for(i; factors < numDivisors; i++) {
        triangleNum = commons.getTriangleNumber(i);
        factors = commons.getNumFactors(triangleNum);
    }

    return triangleNum;
}

// Problem 13: Large Sum
function largeSum(numbers) {
    var total = bigInt();

    numbers.forEach(function (number) {
        total = bigInt(number).add(total);
    });

    return total.toString().substring(0, 10);
}
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

// Problem 15: Power Digit Sum
function powerDigitSum(base, power) {
    var total = bigInt();

    bigInt(base)
        .pow(power)
        .toString()
        .split('')
        .forEach(function (digit) {
            total = bigInt(digit).add(total);
        });

    return total.toString();
}