//Print reverse array
function printReverse(array){
    var reversedArray = array.reverse();
    reversedArray.forEach(element => {
        console.log(element);
    });
}
//CALLING FUNCTION printReverse
printReverse([1,2,3,4,5,6]);





//Return boolean value 
function isUniform(array){
    var start = array[0];

    for(var i = 1; i < array.lenght; i++){
        if(array[i] !== start){
            return false;
        }
    }
    return true;
}

isUniform([1,1,1,1,1,1]);


//Print sum of array elements
function sumArray(array){
    var sum = 0;
    array.forEach(element => {
        sum += element;
    });
    return sum;
}
//Calling function sum
console.log(sumArray([1,2,3]));




//Print max value in an array
function max(array){
    var max = 0;
    array.forEach(element =>{
        if(element > max){
            max = element;
        }
    });
    
    return max;
}
//Calling function
console.log("Il massimo e' " + max([2000,34,122121]));



//Print 

