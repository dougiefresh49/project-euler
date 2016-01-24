var expect = require('chai').expect;

var multiples3and5 = require('../src/problems-1-10/1.multiples-of-3-and-5');

describe('Problems 1 Through 10', function () {
    
    describe('Problem 1: Multiples of three and 5', function () {
        it('should sum all the natural numbers below 10 to be 23', function() {
            expect(multiples3and5(10)).to.be.eql(23);
        });
        
        it('should sum all the natural numbers below 1000 ', function() {
            expect(multiples3and5(1000)).to.be.eql(233168);
        });
    });
    
});