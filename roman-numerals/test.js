const assert = require('assert');
const should = require('should');
const romanNumerals = require('./romanNumerals');

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
                it(`generates the expected numeral ${test[1]} for number ${test[0]}`, function() {
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

describe('romanNumerals', function(){
    describe('values out of range', function(){
        describe('generate()', function(){
            let values = [Number.MIN_SAFE_INTEGER, -999, 0, 4000, 10000, Number.MAX_SAFE_INTEGER];

            values.forEach(function(value){
                it(`should throw an error as ${value} out of range`, function(){
                    //Arrange

                    //Act
                    let actToAssert = function(){ romanNumerals.generate(value);};

                    //Assert
                    assert.throws(actToAssert, 'argument number must be between 1 and 3999', 'because number is out of range');
                });
            })

        })
    })
});

describe('romanNumerals', function(){
    describe('values of wrong type', function(){
        describe('generate()', function(){
            let values = ['22', 2.4, function(){}, 'abc'];

            values.forEach(function(value){
                it(`should throw an error as ${value} is incorrect type`, function(){
                    //Arrange

                    //Act
                    let actToAssert = function(){ romanNumerals.generate(value);};

                    //Assert
                    assert.throws(actToAssert, "argument number must be of type: 'whole number'", 'because number incorrect type');
                });
            });
        });
    });
});

describe('romanNumerals', function(){
    describe('values null and undefined', function(){
        describe('generate()', function(){
            let values = [null, undefined];

            values.forEach(function(value){
                it(`should throw an error as value is ${value}`, function(){
                    //Arrange

                    //Act
                    let actToAssert = function(){ romanNumerals.generate(value);};

                    //Assert
                    assert.throws(actToAssert, 'argument number must be provided', 'because number argument is missing');
                });
            });
        });
    });
});

describe('Promise', function() {
    describe('then()', function(){
        it('then can be called multiple times, same success returned', function(){
            //Arrange
            let originalMillis;
            let actualMillis = [];

            let promise1 = new Promise(function (resolve, reject){
                setTimeout(function(){
                    let time = new Date();
                    resolve(time.getMilliseconds());
                }, 1000);
            });

            return promise1
            .then(function(millis){
                originalMillis = millis;
            })
            .then(function(){
                //Act          
                for (var index = 0; index < 5; index++) {
                    promise1.then(function(millis){
                        actualMillis.push(millis)    
                    });
                }
            })
            .then(function(){
                //Assert
                actualMillis.forEach(function(item){
                    assert.equal(originalMillis, item);
                });
            });
            
            
        })
    });
});

