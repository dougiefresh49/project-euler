
module.exports = {
    euclideanGCD: euclideanGCD,
    lcm: lcm,
    isPrime: isPrime,
    getTriangleNumber: getTriangleNumber,
    getNumFactors: getNumFactors,
    getCollatzChain: getCollatzChain
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

function getNumFactors(n) {
    var factors = 1, // start at 1 to account for n itself
        increment = (n % 2 === 0) ? 1 : 2;

    for(var i = 1; i < n / 2; i+=increment) {
        factors += (n % i === 0) ? 1 : 0;
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