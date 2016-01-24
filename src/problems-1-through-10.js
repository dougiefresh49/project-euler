/**
 * Created by dougiefresh49 on 1/23/16.
 */


module.exports = {
    multiplesOf3and5: multiplesOf3and5
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
