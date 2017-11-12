function ViewModel(){
    let self = this;
    self.number = ko.observable();
    self.numeral = ko.observable();
    self.error = ko.observable('');
    self.generateNumeral = function(){
        return $.get(
            `api/romanNumerals?number=${self.number()}`
        )
        .done(function(res){
            self.numeral(res);
            self.error('');
        })
        .fail(function(error){
            self.numeral('');
            self.error(error.responseText);
        })
        .catch(function(error){
            self.numeral('');
            self.error(error.responseText);
        });
    };
    
    return self;
};

let viewModel = new ViewModel();

ko.applyBindings(viewModel);
