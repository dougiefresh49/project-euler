var expect = require('chai').expect;

var commons = require('../src/common-algorithms');

describe('Common Algorithms', function () {
    
    describe('Euclidean\'s GCD', function () {
        it('should calculate the GCD of 45,15 to be 15', function() {
            expect(commons.euclideanGCD(45,15)).to.be.eql(15);
        });
    });
    
    describe('Least Common Multiple', function () {
        it('should calculate the lcm of 65,15 to be 195', function() {
            expect(commons.lcm(65, 15)).to.be.eql(195);
        });
    });
    
});