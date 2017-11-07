const assert = require('assert');
const romanNumerals = require('./romanNumerals.js');

describe('romanNumerals', function(){
    describe('generate()', function(){
        var tests = [
            {number: 1, expected: 'I'},
            {number: 2, expected: 'II'}                
        ];

        tests.forEach(function(test){
            it(`generates the expected numeral ${test.expected} for number ${test.number}`, function() {
                //Arrange
                const generator = new romanNumerals.romanNumerals();

                //Act
                let result = generator.generate(test.number);

                //Assert
                assert.equal(result, test.expected);
            })
        });
    })
})