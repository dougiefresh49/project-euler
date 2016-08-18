var bigInt = require("big-integer"),
    commons = require('./common-algorithms');

module.exports = {
    calculateSingleNameScore: calculateSingleNameScore, 
    nameScore: nameScore,
    sumAmicableNumbers: sumAmicableNumbers,

    nDigitFibonacci: nDigitFibonacci,
    sumDiagonals: sumDiagonals
};

// Problem 21: Sum Amicable Numbers
function sumAmicableNumbers(max) {
    var a, b, _a, amicableSum = 0;

    for (a = 1; a < max; a++) {
        b = commons.sumProperDivisors(a);
        _a = commons.sumProperDivisors(b);

        amicableSum += ((a === _a && a !== b)) ? b : 0;
    }
    
    return amicableSum;
}


// Problem 22: Name Scores
function calculateSingleNameScore(name, idx) {
    var rank = idx + 1;
    var letters = {
        A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 10, K: 11, L: 12, M: 13, N: 14, O: 15,
        P: 16, Q: 17, R: 18, S: 19, T: 20, U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26
    };
    return rank * name
        .split('')
        .reduce(function(prevVal, currentLetter){
            return prevVal + letters[currentLetter.toUpperCase()];
        }, 0);
}
function sumAllNamesReducer(prev, current) {
    return prev + current;
}
function nameScore(names) {
    return names
        .sort()
        .map(calculateSingleNameScore)
        .reduce(sumAllNamesReducer, 0);
}

// Problem 25: 1000-digit Fibonacci number
/**
 * Note: nDigitFibonacci is an easy solution in code,
 * a more mathematical approach with pen and paper would be...
 *       
 * knowing that any given fib number can be found with
 * F(n) = phi^(n)/sqrt(5)
 *
 * we can use the following to solve for the qth-digit Fibonacci number
 *   phi^(n)/sqrt(5) > 10^(q-1)
 *     --> n*log(phi) - 0.5log5 > q - 1
 *     --> n*log(phi) > q - 1 + 0.5log5
 *     --> n > (q - 1 + 0.5log5)/log(phi)
 *
 *  Source: Explanation by ChillFruit on Project Euler Forums
 */
function nDigitFibonacci(n) {
    var a = bigInt(1),
        b = bigInt(1),
        sum = 0,
        term = 3;

    while(n > a.plus(b).toString().length) {
        term++;
        sum = a.plus(b);
        a = b;
        b = sum;
    }
    
    return term;
}


// Problem 28: Number Spiral Diagonals
/**
 * Note on Solution:
 * ------------------
 * The solution assumes a grid of size x, where x is an odd number.
 * The algorithm simply starts at the center and
 *      for every row from the center+1 to x
 *          ~~ it calculates the sum of the 4 corners of the box made by
 *             the nth row above and below the center
 *          ~~ n is the current row - center
 *  ___ ___ ___
 * | 7 | 8 | 9 |
 *  --- --- ---
 * | 6 | 1 | 2 |
 *  --- --- ---
 * | 5 | 4 | 3 |
 *  --- --- ---
 *
 *  x = 3
 *  center = floor(x / 2) + 1 = 2
 *  row = 1, 
 *  n = row - center = 1
 *  
 *  top_right = (1 + 2n)^2
 *  top_left = top_right - 2n = (1 + 2n)^2 - 2n
 *  bottom_left = top_left - 2n = (1 + 2n)^2 - 2n - 2n = (1 + 2n)^2 - 4n
 *  bottom_right = bottom_left - 2n = (1 + 2n)^2 - 4n - 2n = (1 + 2n)^2 - 6n
 *
 *  diagonalSum for x = 3 = top_right + top_left + bottom_left + bottom_right + 1
 *
 *  diagonalSum for x rows:
 *   x 
 * ( ∑  4(1 + 2n)^2 -12n ) + 1
 *   x/2 
 *  
 */
function sumDiagonals(gridSize) {
    var n,
        diagonalSum = 0,
        center = Math.floor(gridSize / 2) + 1;

    for (var row = center + 1; row < gridSize + 1; row++) {
        n = row - center;
        diagonalSum += 4 * Math.pow((1 + 2*n), 2) - 12*n;
    }
    
    return diagonalSum + 1;
}