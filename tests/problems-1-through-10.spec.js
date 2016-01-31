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
    
    describe('Problem 2: Even Fibonacci Numbers', function () {
        it('should sum even fib numbers between 1 and 10', function() {
            expect(problems.evenFibNumbers(10)).to.be.eql(10);
        });

        it('should sum even fib numbers between 1 and 4,000,000', function() {
            expect(problems.evenFibNumbers(4000000)).to.be.eql(4613732);
        });
    });
    
    describe('Problem 3: Largest Prime Factor', function () {
        it('should calculate the largest prime factor for 651 to be 31', function() {
            expect(problems.largestPrimeFactor(651)).to.be.eql(31);
        });

        it('should calculate the largest prime factor for 651 to be 31', function() {
            expect(problems.largestPrimeFactor(600851475143)).to.be.eql(6857);
        });
    });

    describe('Problem 4: Largest Palindrome', function () {
        it('should calculate the largest palindrome for two digit number to be 9009', function() {
            expect(problems.largestPalindrome(2)).to.be.eql(9009);
        });

        it('should calculate the largest palindrome for 3 digit number to be 906609 ', function() {
            expect(problems.largestPalindrome(3)).to.be.eql(906609);
        });
    });

    describe('Problem 5: Smallest Multiple', function () {
        it('should calculate the smallest multiple for numbers 1 through 10', function() {
            expect(problems.smallestMultiple(1, 10)).to.be.eql(2520);
        });

        it('should calculate the smallest multiple for numbers 1 through 20', function() {
            expect(problems.smallestMultiple(1, 20)).to.be.eql(232792560);
        });
    });
    
    describe('Problem 6: Sum Square Difference', function () {
        it('should get the difference between the sum of the squares of the first ten natural numbers and the square of the sum', function() {
            expect(problems.sumSquareDiff(1,10)).to.be.eql(2640);
        });
        
        it('should get the difference between the sum of the squares of the first 100 natural numbers and the square of the sum', function() {
            expect(problems.sumSquareDiff(1,100)).to.be.eql(25164150);
        });
    });

    describe('Problem 7: 10001st Prime', function () {
        it('should calculate the 6th prime to be 13', function() {
            expect(problems.nthPrime(6)).to.be.eql(13);
        });

        it('should calculate the 10001st prime to be 104743', function() {
            expect(problems.nthPrime(10001)).to.be.eql(104743);
        });

    });
    
});





















