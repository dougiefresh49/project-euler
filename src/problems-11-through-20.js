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
    getPossibleLatticePaths: getPossibleLatticePaths,
    powerDigitSum: powerDigitSum,
    numberLetterCounts: numberLetterCounts,
    factorialDigitSum: factorialDigitSum
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

// Problem 15: Lattice Paths
// An even more optimized solution would be to use choose(m+n-1, n-1)
// See http://qa.geeksforgeeks.org/3676/number-of-unique-paths
function getPossibleLatticePaths(m, n) {
    var i, j, storedCounts = [];
    m++; n++; // increment m and n by 1, ex: a 2x2 grid has 9 vertices, see below

    /*
     1--2--3
     |  |  |
     4--5--6
     |  |  |
     7--8--9
     */

    // create 2D array to store previously found counts for direct lookup time with dynamic programming
    for(storedCounts; storedCounts.length < m; storedCounts.push([]));

    // set top row and first col to 1's
    for(i = 0; i < m; i++){ storedCounts[i][0] = 1; }
    for(j = 0; j < n; j++){ storedCounts[0][j] = 1; }

    for(i = 1; i < m; i++) {
        for(j = 1; j < n; j++) {
            storedCounts[i][j] = storedCounts[i-1][j] + storedCounts[i][j-1]
        }
    }

    return storedCounts[m-1][n-1];
}

// Problem 16: Power Digit Sum
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

// Problem 17: Number Letter Counts
function numberLetterCounts(startNum, endNum) {

    var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
        tens = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'],
        teens = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    var totalCount = 0;

    function convertThousands(n) {
        return (n > 999)
            ? ones[Math.floor(n / 1000)] + " thousand " + convertHundreds(n % 1000)
            : convertHundreds(n);
    }

    function convertHundreds(n) {
        return (n > 99)
            ? ones[Math.floor(n / 100)] + " hundred " + convertTens(n % 100 , true)
            : convertTens(n);
    }

    function convertTens(n, addAnd) {
        var and = (addAnd && n !== 0) ? ' and ' : '';
        return (n > 9 && n < 20)
            ? and + teens[n - 10]
            : and + tens[Math.floor(n / 10)] + ' ' + ones[n % 10];
    }

    // Loop and process all the numbers
    for(var i = startNum; i <= endNum; i++) {
        var word = convertThousands(i);
        console.log(word);
        totalCount += word.replace(/\s/g, '').length; // Note: don't count spaces
    }

    return totalCount;
}

// Problem 20: Factorial Digit Sum
function factorialDigitSum(n) {

    function sum(a, b) {
        return parseInt(a) + parseInt(b);
    }

    return commons
        .factorial(n)
        .toString()
        .split('')
        .reduce(sum, 0);
}