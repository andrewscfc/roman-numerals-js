let timeout;

function debounce(toRun, frequency){
    if(timeout){
        clearTimeout(timeout);
    }

    timeout = setTimeout(function(){
        toRun();
    }, 100);
}

module.exports = debounce;