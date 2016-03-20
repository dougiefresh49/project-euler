var expect = require('chai').expect;

var problems = require('../src/problems-11-through-20'),
    problem11Data = require('./data/problem-11-data.json'),
    problem13Data = require('./data/problem-13-data.json');

describe('Problems 11 through 20', function () {

    describe('Problem 11: Largest Product In A Grid', function () {
        it('should calculate the greatest product of 4 digits', function() {
            var grid = problem11Data.bigGrid;
            expect(problems.largestProductInGrid(grid, 4)).to.be.eql(70600674);
        });
    });

    describe('Problem 12: Highly Divisible Triangle Number', function () {
        it('should calculate that 28 is the first triangle number with over 5 divisors', function() {
            expect(problems.divisibleTriangleNumbers(5)).to.be.eql(28);
        });

        it('should calculate the first triangle number with 500 divisors', function() {
            this.timeout(15000);
            expect(problems.divisibleTriangleNumbers(500)).to.be.eql(76576500);
        });
    });

    describe('Problem 13: Large Sum', function () {
        it('should first ten digits of the sum of the one-hundred 50-digit numbers', function() {
            var numbers = problem13Data.numbers;
            expect(problems.largeSum(numbers)).to.be.eql('5537376230');
        });
    });

    describe('Problem 14: Largest Collatz Sequence', function () {
        it('should get starting number under 1 million with longest chain', function() {
            this.timeout(15000);
            expect(problems.largestCollatzSequence(13)).to.be.eql(9);
            //expect(problems.largestCollatzSequence(1000000)).to.be.eql(837799);
        });
    });
    
    describe.only('Problem 15: Lattice Paths', function () {
        it('should count 6 possible routes for a 2x2 grid', function() {
            expect(problems.getPossibleLatticePaths(2,2)).to.be.eql(6);
        });

        it('should count possible routes for a 20x20 grid', function() {
            expect(problems.getPossibleLatticePaths(20,20)).to.be.eql(137846528820);
        });
    });
    
    describe('Problem 16: Power digit sum', function () {
        it('should sum the digits of 2^15 to be 26', function() {
            expect(problems.powerDigitSum(2, 15)).to.be.eql('26');
        });

        it('should sum the digits of 2^1000', function() {
            expect(problems.powerDigitSum(2, 1000)).to.be.eql('1366');
        });
    });
    
});