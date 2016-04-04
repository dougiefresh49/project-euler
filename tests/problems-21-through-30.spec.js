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
    
});