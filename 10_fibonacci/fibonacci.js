const fibonacci = function(num) {
    let intnum  = parseInt(num)
    let num1 = 0;
    let num2 = 1;
    let sum = 0;
    if (Math.sign(intnum)=== -1 || Math.sign(intnum)=== -0){
        return 'OOPS'
    }
    else {
        for(i = 0; i < intnum; i++){
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return num1;
}
};

// Do not edit below this line
module.exports = fibonacci;
