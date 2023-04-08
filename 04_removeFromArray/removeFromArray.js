const removeFromArray = function(arr , ...args) {
    let newarr = [];
    arr.forEach((value) => {
        if (args.includes(value))
        {}
        else{
        newarr.push(value);
        }
        
    });
return newarr;
};

// Do not edit below this line
module.exports = removeFromArray;
