var expect = require('chai').expect;

var problems = require('../src/problems-11-through-20'),
    problem11Data = require('./data/problem-11-data.json');

describe('Problems 11 through 20', function () {

    describe('Problem 11: Largest Product In A Grid', function () {
        it('should calculate the greatest product of 4 digits', function() {
            var grid = problem11Data.bigGrid;
            expect(problems.largestProductInGrid(grid, 4)).to.be.eql(70600674);
        });
    });

    describe('Problem 12: Highly Divisible Triangle Number', function () {
        it('should calculate that 28 is the first triangle number with 5 divisors', function() {
            expect(problems.divisibleTriangleNumbers(5)).to.be.eql(28);
        });

        xit('should calculate the first triangle number with 500 divisors', function() {
            //expect(problems.divisibleTriangleNumbers(500)).to.be.eql(??);
        });
    });

    describe('Problem 13: Large Sum', function () {
        it('should first ten digits of the sum of the one-hundred 50-digit numbers', function() {
        });
    });

    describe('Problem 14: Largest Collatz Sequence', function () {
        it('should get starting number under 1 million with longest chain', function() {
            this.timeout(15000);
            expect(problems.largestCollatzSequence(13)).to.be.eql(9);
            //expect(problems.largestCollatzSequence(1000000)).to.be.eql(837799);
        });
    });
    
});