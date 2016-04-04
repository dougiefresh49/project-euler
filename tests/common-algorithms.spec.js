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

    describe('Is Number Prime', function () {
        it('should validate that 1 is NOT prime', function() {
            expect(commons.isPrime(1)).to.be.eql(false);
        });

        it('should validate that 2 is prime', function() {
            expect(commons.isPrime(2)).to.be.eql(true);
        });

        it('should validate that 3 is prime', function() {
            expect(commons.isPrime(3)).to.be.eql(true);
        });

        it('should validate that 4 is NOT prime', function() {
            expect(commons.isPrime(4)).to.be.eql(false);
        });

        it('should validate that 7 is prime', function() {
            expect(commons.isPrime(7)).to.be.eql(true);
        });

        it('should validate that 13 is prime', function() {
            expect(commons.isPrime(13)).to.be.eql(true);
        });

        it('should validate that 15 is not prime', function() {
            expect(commons.isPrime(15)).to.be.eql(false);
        });

        it('should validate that 173 is prime', function() {
            expect(commons.isPrime(173)).to.be.eql(true);
        });

    });

    describe('Get Triangle Numbers', function () {
        it('should get the 3rd triangle number', function() {
            expect(commons.getTriangleNumber(3)).to.be.eql(6);
        });

        it('should get the 7th triangle number', function() {
            expect(commons.getTriangleNumber(7)).to.be.eql(28);
        });
    });

    describe('Factorial', function () {
        it('should calculate 5!', function() {
            expect(commons.factorial(5).toString()).to.be.eql('120');
        });

        it('should calculate 10!', function() {
            expect(commons.factorial(10).toString()).to.be.eql('3628800');
        });
    });

    describe('Get Factors', function () {
        it('should get all factors of 24', function() {
            expect(commons.getFactors(24)).to.be.eql([1,24,2,12,3,8,4,6]);
        });
    });
    
    describe('Sum Proper Divisors', function () {
        it('should sum proper divisors of 24', function() {
            expect(commons.sumProperDivisors(24)).to.be.eql(36);
        });

        it('should sum proper divisors of 220', function() {
            expect(commons.sumProperDivisors(220)).to.be.eql(284);
        });

        it('should sum proper divisors of 284', function() {
            expect(commons.sumProperDivisors(284)).to.be.eql(220);
        });
    });

});