function isEven(number){
    return number % 2 === 0;
}


isEven(40);
isEven(41);


function factorial(number){
    var result = 1;
    for(var i = 2; i <= num; i++){
        result *=  i;
    }
    return result;
}


function kebabToSnake(string){
    return string.replace(/-/g, "_");
}