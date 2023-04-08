const repeatString = function(sting , num) {
    let savedsting = sting;
    if (Math.sign(num) === -1){
        return 'ERROR'
    }
    else if (num === 0){
        return ""
    }
    else {
        for (i = 1; i < num; i++){
            savedsting += sting;
        
        }

    }

return savedsting;
};

// Do not edit below this line
module.exports = repeatString;
