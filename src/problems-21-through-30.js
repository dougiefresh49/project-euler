
module.exports = {
    calculateSingleNameScore: calculateSingleNameScore, 
    nameScore: nameScore
};


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