var bigInt = require("big-integer");

module.exports = {
    euclideanGCD: euclideanGCD,
    lcm: lcm,
    isPrime: isPrime,
    getTriangleNumber: getTriangleNumber,
    getFactors: getFactors,
    getCollatzChain: getCollatzChain,
    factorial: factorial
};

// Wiki: https://en.wikipedia.org/wiki/Euclidean_algorithm
function euclideanGCD(a, b) {
    return !b? a : euclideanGCD(b, a % b);
}

// Wiki: https://en.wikipedia.org/wiki/Least_common_multiple#Computing_the_least_common_multiple
function lcm(a, b) {
    return (a * b) / euclideanGCD(a, b);
}

function isPrime(n) {

    if(n === 1) {
        return false;
    }
    else if(n < 4) {
        // n = 2 or n = 3
        return true;
    }
    else if(n % 2 === 0) {
        return false;
    }
    else if(n < 9) {
        // 4, 6, 8 already excluded
        return true;
    }
    else if(n % 3 === 0) {
        return false;
    }
    else {
        var r = Math.floor(Math.sqrt(n));
        var f = 5;

        while(f <= r) {
            if(n % f === 0) return false;
            if(n % (f+2) === 0) return false;
            f += 6;
        }

        return true;
    }
}

function getTriangleNumber(n) {
    return ( n * (n + 1) ) / 2
}

function getFactors(n) {
    var factors = [];
    for(var i = 1; i*i <= n; i++) {
        if(n % i === 0){
            factors.push(i);
            factors.push(n/i);
        }
    }
    return factors;
}

function getCollatzChain(n) {
    var chainLength = 0;

    while(n > 1) {
        n = (n % 2 === 0) ? n / 2 : 3*n + 1;
        chainLength++;
    }

    return chainLength;
}

// Basic factorial recursion but using array to save the values vs calculations
// Source: http://stackoverflow.com/questions/3959211/fast-factorial-function-in-javascript
var f = [];
function factorial (n) {
    if (n == 0 || n == 1)
        return 1;
    if (f[n] > 0)
        return f[n];
    return f[n] = bigInt(factorial(n-1)).multiply(bigInt(n));
}