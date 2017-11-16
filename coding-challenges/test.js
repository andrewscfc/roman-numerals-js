const assert = require('assert');
const binarySearch = require('./binary-search')

describe('should find cherry', function(){
    it('should find cherry', function(){
        //Act
        let result = binarySearch('cherry');

        //Assert
        assert.equal(2, result);
    })
})

const debounce = require('./debounce');

describe('debounce', function(){
    it('should only push one item', function(resolve){
        //Arrange
        let items = [];

        let functionToDebounce = function(){
            items.push(true);
        };

        //Act
        let debounced = function() { debounce(functionToDebounce, 100) };

        debounced();
        debounced();
        debounced();
        debounced();

        setTimeout(function(){
            assert.equal(1, items.length);
            resolve();
        }, 300);
    })
});

const sort = require('./sort')

describe('sort', function(){
    it('should be sorted', function(){        
        //Arrange
        var arr = [5, 1, 4, 2, 3];
        
        //Act
        var sorted = sort(arr);

        //Assert
        assert.equal[1, 2, 3, 4, 5];
        console.log(sorted); // [1, 2, 3, 4, 5]
    });
})