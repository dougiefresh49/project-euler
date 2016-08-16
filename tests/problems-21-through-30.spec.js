var expect = require('chai').expect;

var problems = require('../src/problems-21-through-30'),
    problem22Data = require('./data/problem-22-data.json');

describe('Problems 21 through 30', function () {
    
    describe('Problem 21: Amicable Numbers', function () {
        it('should calculate the sum of Amicable Numbers under 10,000', function() {
            expect(problems.sumAmicableNumbers(10000)).to.be.eql(31626);
        });
    });
    
    describe('Problem 22: Name Scores', function () {
        it('should calculate the name score for "Collin" to be 53', function() {
            expect(problems.calculateSingleNameScore("COLIN", 937)).to.be.eql(49714);
        });

        it('should calculate the name score for all names', function() {
            expect(problems.nameScore(problem22Data.names)).to.be.eql(871198282);
        });
    });

    describe('Problem 28: Number Spiral Diagonals', function () {
        it('should sum the diagonals of 5x5 grid to be 101', function() {
            expect(problems.sumDiagonals(5)).to.be.eql(101);
        });

        it('should sum the diagonals of 5x5 grid to be 101', function() {
            expect(problems.sumDiagonals(7)).to.be.eql(261);
        });

        it('should sum the diagonals of the 1001x1001 grid to be ??', function() {
            expect(problems.sumDiagonals(1001)).to.be.eql(669171001);
        });
    });
    
});