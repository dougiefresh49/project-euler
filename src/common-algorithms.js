
module.exports = {
    euclideanGCD: euclideanGCD,
    lcm: lcm,
    isPrime: isPrime
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