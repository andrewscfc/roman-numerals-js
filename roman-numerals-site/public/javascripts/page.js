let viewModel = function(){
    let self = this;
    self.number = ko.observable();
    self.numeral = ko.observable();
    self.generateNumeral = function(){
        return $.get(
            'api/romanNumerals', 
            {number : number() }
        ).done(function(res){
            numeral(res);
        })
        .fail(function(error){
            console.log(error);
        })
        .catch(function(error){
            console.log(error);
        });
    };
    
    return self;
};

ko.applyBindings(viewModel);
