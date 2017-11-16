function sort(items){
    let itemMoved = false;
    
    do{        
        itemMoved = false;

        for(let i = 0; i<items.length; i++){
            if(i != items.length -1){
                if(items[i] > items[i+1]){
                    let toDemote = items[i+1];
                    items[i+1] = items[i];
                    items[i] = toDemote;
                    itemMoved = true;
                }
            }
        }
    }
    while(itemMoved);

    return items;  
};

module.exports = sort;