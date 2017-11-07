const assert = require('assert');
const romanNumerals = require('./romanNumerals');

const ValuePair = function(number, expected){
    return {
        number : number,
        expected : expected
    };
}

describe('romanNumerals', function(){
    describe('validValues', function(){
        describe('generate()', function(){
            var tests = [
                [1, 'I'],
                [5, 'V'],
                [10, 'X'],     
                [20, 'XX'], 
                [3999, 'MMMCMXCIX'], 
                [4, "IV"],
                [44, "XLIV"],
                [495, "CDXCV"],
                [999, "CMXCIX"],
                [1449, "MCDXLIX"],
                [11, "XI"],
                [23, "XXIII"],
                [333, "CCCXXXIII"],
                [676, "DCLXXVI"],
                [2366, "MMCCCLXVI"],
                [3787, "MMMDCCLXXXVII"],

            ];
    
            tests.forEach(function(test){
                it(`generates the expected numeral ${test.expected} for number ${test.number}`, function() {
                    //Arrange
    
                    //Act
                    let result = romanNumerals.generate(test[0]);
    
                    //Assert
                    assert.equal(result, test[1]);
                });
            });
        });
    });    
});

