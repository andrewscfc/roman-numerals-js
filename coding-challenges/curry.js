function curry(toCurry){
    let lastArg;
    return function(arg){
        let self = this;
        if(!lastArg){
            lastArg = arg;
            return self;
        } else {
            let result = toCurry(arg, lastArg);
            lastArg = arg;
            re
        }
    }
}