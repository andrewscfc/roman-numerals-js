const http = require('http');

http.get('http://localhost:3000/api/romanNumerals?number=21', function(response){
    

    function processResponse(){
        return new Promise(function(resolve){
            let data = ''
            
            response.on('data', function(chunk){
                data += chunk;
            });
        
            response.on('end', function(){
                resolve(data);
            });
        });      
    };

    async function log(){
        let finalData = await processResponse();
        console.log(finalData);
    };

    log();

});

