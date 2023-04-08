const sumAll = function(num,times) {
    let result = 0;
    if   (typeof num !== 'number' || typeof times !== 'number' )
    {
        result = 'ERROR';
    }
   else if (num > times)
    {
        for (i = num; i >= times; i--){
            result +=i
        }

    }
    else if (Math.sign(num) === -1)
        result = 'ERROR';

    else if  (num < times)   {
    for (i = num; i <= times; i++)
    {
        result += i
    }
    

    }
    else {
        result ="ERROR";
    }


    return result;

};

// Do not edit below this line
module.exports = sumAll;
