
function IsDiv3(number){
    return (number % 3) == 0;
}

function IsDiv5(number){
    return (number % 5) == 0;
}

function hw1(start, end)
{
    for (let i = start; i <= end; i++) {

        let isDiv3 = IsDiv3(i);
        let isDiv5 = IsDiv5(i);

        if(isDiv3 && isDiv5)
            console.log(`${i} FizzBuzz`);
        else{
            if(isDiv3)
                console.log(`${i} Fizz`);
            if(isDiv5)
            console.log(`${i} Buzz`);
        }
    }
}

hw1(1,100);