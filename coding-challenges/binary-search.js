
function binarySearch(subject){
    let items = ['apple', 'banana', 'cherry', 'dates', 'eggs', 'figs', 'grapes'];   
    
    let initialIndex;

    let mappedItems = items.map(function(item, index){
        return { item : item, index : index };
    });

    do{
        let index = Math.floor(mappedItems.length / 2);        

        if(subject === mappedItems[index].item){
            return mappedItems[index].index;
        } else if(subject > mappedItems[index].item){
            mappedItems = mappedItems.slice(index);
        } else {
            mappedItems = mappedItems.slice(0, index);
        }
    } while(items.length > 0);

    return -1;
}

module.exports = binarySearch;


