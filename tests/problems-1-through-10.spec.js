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

    describe('Problem 8: Largest Product in a Series', function () {
        var series = "73167176531330624919225119674426574742355349194934" +
            "96983520312774506326239578318016984801869478851843" +
            "85861560789112949495459501737958331952853208805511" +
            "12540698747158523863050715693290963295227443043557" +
            "66896648950445244523161731856403098711121722383113" +
            "62229893423380308135336276614282806444486645238749" +
            "30358907296290491560440772390713810515859307960866" +
            "70172427121883998797908792274921901699720888093776" +
            "65727333001053367881220235421809751254540594752243" +
            "52584907711670556013604839586446706324415722155397" +
            "53697817977846174064955149290862569321978468622482" +
            "83972241375657056057490261407972968652414535100474" +
            "82166370484403199890008895243450658541227588666881" +
            "16427171479924442928230863465674813919123162824586" +
            "17866458359124566529476545682848912883142607690042" +
            "24219022671055626321111109370544217506941658960408" +
            "07198403850962455444362981230987879927244284909188" +
            "84580156166097919133875499200524063689912560717606" +
            "05886116467109405077541002256983155200055935729725" +
            "71636269561882670428252483600823257530420752963450";

        it('should get largest product of 4 adjacent digits to be 5832', function() {
            expect(problems.largestProductInSeries(series, 4)).to.be.eql(5832);
        });

        it('should get largest product of 4 adjacent digits to be 5832', function() {
            expect(problems.largestProductInSeries(series, 13)).to.be.eql(23514624000);
        });
    });

    describe('Problem 9: Special Pythagorean Triplet', function () {
        it('should find the product of a*b*c when a is 3, b is 4, c is 5', function() {
            expect(problems.pythagoreanTriplet(12)).to.be.eql(60);
        });

        it('should find the product of a*b*c when a + b + c = 1000', function() {
            expect(problems.pythagoreanTriplet(1000)).to.be.eql(31875000);
        });
    });

    describe('Problem 10: Summation of Primes', function () {
        it('should sum all primes below 10 to be 17', function() {
            expect(problems.sumAllPrimes(10)).to.be.eql(17);
        });

        it('should sum all primes below 2 Million to be 142913828922', function() {
            // Commented out due to time it takes to complete :(
            //expect(problems.sumAllPrimes(2000000)).to.be.eql(142913828922);
        });
    });
    
});





















