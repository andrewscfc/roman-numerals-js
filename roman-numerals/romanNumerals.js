const thousands = new PlaceValueMapping(1000, 
    [[0, ''],
    [1, 'M'],
    [2, 'MM'],
    [3, 'MMM']]);

const hundreds = new PlaceValueMapping(100, 
    [[0, ''],
    [1, 'C'],
    [2, 'CC'],
    [3, 'CCC'],
    [4, 'CD'],
    [5, 'D'],
    [6, 'DC'],
    [7, 'DCC'],
    [8, 'DCCC'],
    [9, 'CM']]);

const tens = new PlaceValueMapping(10, 
    [[0, ''],
    [1, 'X'],
    [2, 'XX'],
    [3, 'XXX'],
    [4, 'XL'],
    [5, 'L'],
    [6, 'LX'],
    [7, 'LXX'],
    [8, 'LXXX'],
    [9, 'XC']]);

const units = new PlaceValueMapping(1, 
    [[0, ''],
    [1, 'I'],
    [2, 'II'],
    [3, 'III'],
    [4, 'IV'],
    [5, 'V'],
    [6, 'VI'],
    [7, 'VII'],
    [8, 'VIII'],
    [9, 'IX']]);


function PlaceValueMapping(placeValue, mappings){
    if(!placeValue) throw new Error('placeValue argument must be provided');
    if(!Number.isInteger(placeValue)) throw new Error('placeValue argument must be an integer');
    if(!Array.isArray(mappings)) throw new Error('mappings argument must be array');
    
    let self = this;
    self.placeValue = placeValue;
    self.mappings = new Map(mappings);

    return {
        placeValue : placeValue,
        mappings : new Map(mappings)
    };
}



module.exports.generate = function(number){
    //expectations
    if(!number){
        throw new Error('Argument number is not provided');
    }
    if(!Number.isInteger(number)){
        throw new Error("argument number must be of type: 'whole number'");
    };
    if(number < 1 || number > 3999){
        throw new Error('argument number must be between 1 and 3999')
    }

    function resolveNumeralPortion(placeValueMapping){
        var portionStep = Math.floor((number / placeValueMapping.placeValue) % 10);
        return placeValueMapping.mappings.get(portionStep);
    }

    let thousandPortion = resolveNumeralPortion(thousands);
    let hundredPortion = resolveNumeralPortion(hundreds);
    let tenPortion = resolveNumeralPortion(tens);
    let unitPortion = resolveNumeralPortion(units);

    return `${thousandPortion}${hundredPortion}${tenPortion}${unitPortion}`;

}