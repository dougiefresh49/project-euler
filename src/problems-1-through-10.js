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
    sumSquareDiff: sumSquareDiff
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

function sumSquareDiff(min, max) {
    var sumOfSquares = 0,
        sum = 0;

    for(var i = min; i <= max; i++) {
        sumOfSquares += i*i;
        sum += i;
    }

    return (sum * sum) - sumOfSquares;

}
