var expect = require('chai').expect;

var problems = require('../src/problems-1-through-10');

describe('Problems 1 Through 10', function () {
    
    describe('Problem 1: Multiples of three and 5', function () {
        it('should sum all the natural numbers below 10 to be 23', function() {
            expect(problems.multiplesOf3and5(10)).to.be.eql(23);
        });
        
        it('should sum all the natural numbers below 1000 ', function() {
            expect(problems.multiplesOf3and5(1000)).to.be.eql(233168);
        });
    });
    
});