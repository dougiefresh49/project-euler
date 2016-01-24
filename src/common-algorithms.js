
module.exports = {
    euclideanGCD: euclideanGCD,
    lcm: lcm
};

// Wiki: https://en.wikipedia.org/wiki/Euclidean_algorithm
function euclideanGCD(a, b) {
    return !b? a : euclideanGCD(b, a % b);
}

// Wiki: https://en.wikipedia.org/wiki/Least_common_multiple#Computing_the_least_common_multiple
function lcm(a, b) {
    return (a * b) / euclideanGCD(a, b);
}