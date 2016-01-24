/**
 * Created by dougiefresh49 on 1/23/16.
 */


module.exports = multipleOf3and5;

function multipleOf3and5(limit) {
    var sum = 0;
    for(var i = 0; i < limit; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    return sum;
}
