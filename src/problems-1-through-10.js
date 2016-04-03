/**
 * Created by dougiefresh49 on 1/23/16.
 */

var commons = require('./common-algorithms');

module.exports = {
    multiplesOf3and5: multiplesOf3and5,
    evenFibNumbers: evenFibonacciiNumbers,
    largestPrimeFactor: largestPrimeFactor,
    largestPalindrome: largestPalindrome,
    smallestMultiple: smallestMultiple,
    sumSquareDiff: sumSquareDiff,
    nthPrime: nthPrime,
    largestProductInSeries: largestProductInSeries,
    pythagoreanTriplet: pythagoreanTriplet,
    sumAllPrimes: sumAllPrimes
};

// Problem 1: Multiples of 3 and 5
function multiplesOf3and5(limit) {
    var sum = 0;
    for(var i = 0; i < limit; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    return sum;
}

// Problem 2: Even Fibonacci Numbers
function evenFibonacciiNumbers(limit) {
    var sum = 0;
    var previous1 = 1;
    var previous2 = 0;

    for(var i = 1; i < limit; i = previous1 + previous2) {
        previous2 = previous1;
        previous1 = i;

        if(i % 2 === 0) {
            sum += i;
        }
    }

    return sum
}

// Problem 3: Largest Prime Factors
// Note: idea from https://jsfiddle.net/JamesOR/RC7SY/
function largestPrimeFactor(num) {
    var i;

    for(i = 2; i < num; i++) {
        while(num % i === 0) {
            num /= i;
        }
    }

    return i;
}

// Problem 4: Largest Palindrome
function largestPalindrome(numDigits) {

    var i = parseInt(new Array(numDigits + 1).join('9')),
        startNum = parseInt(new Array(numDigits + 1).join('9')),
        minNum = parseInt(new Array(numDigits).join('9')),
        largestPalindrome = 0;

    for(i; i > minNum; i--) {
        for(var j = startNum; j > minNum; j--) {
            var multiple = (j * i);

            // Check for palindrome
            if(multiple.toString() === multiple.toString().split('').reverse().join('')) {
                largestPalindrome = (largestPalindrome < multiple) ? multiple : largestPalindrome;
            }
        }
    }

    return largestPalindrome;
}

// Problem 5: Smallest Multiple
// Solution based off of the following
// SO: http://stackoverflow.com/questions/31302054/how-to-find-the-least-common-multiple-of-a-range-of-numbers
function smallestMultiple(min, max) {

    var multiple = min;
    for(var n = min; n < max; n++) {
        multiple = commons.lcm(multiple, n);
    }

    return multiple;
}

// Problem 6: Sum Square Difference
function sumSquareDiff(min, max) {
    var sumOfSquares = 0,
        sum = 0;

    for(var i = min; i <= max; i++) {
        sumOfSquares += i*i;
        sum += i;
    }

    return (sum * sum) - sumOfSquares;
}

// Problem 7: nth Prime
function nthPrime(limit) {
    var count = 1,
        candidate = 1;

    while(count < limit) {
        candidate+=2;
        if(commons.isPrime(candidate)) count += 1;
    }

    return candidate;
}

// Problem 8: Largest Product in a Series
function largestProductInSeries(series, numAdj) {
    var largestProduct = 0;
    var product;

    for(var i = 0; i < series.length; i++) {
        product = 1;
        series.substr(i, numAdj).split('').forEach(function (n) { product *= parseInt(n); });
        largestProduct = (product > largestProduct) ? product : largestProduct;
    }

    return largestProduct;
}

// Problem 9: Special Pythagorean Triplet
// Solution based off of the following
// SO: http://stackoverflow.com/questions/16143499/pythagorean-triples-formula-in-javascript-project-euler-prob-9
function pythagoreanTriplet(tripletSum) {
    var a, b, c;
    for(b = 1; b < tripletSum; b++) {
        a = (Math.pow(tripletSum,2)/2 - tripletSum * b) / (tripletSum- b);

        if(Math.floor(a) === a) {
            c = tripletSum - a - b;
            break;
        }
    }
    return a * b * c;
}

// Problem 10: Summation of Primes
function sumAllPrimes(limit) {
    var sum = 2; // we know 2 is prime

    for(var i = 1; i < limit; i+=2) {
        if(commons.isPrime(i)) sum += i;
    }

    return sum;
}