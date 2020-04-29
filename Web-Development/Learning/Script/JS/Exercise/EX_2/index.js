//Numbers between -10 and 19

for(var i = -10; i < 19; i++){
    console.log(i);
}

//Even numbers between 10 and 40
console.log("------------------------------------------");
for(var i = 10; i < 40; i++){
    console.log(i++);
}

//Odd numbers between 300 and 333
console.log('------------------------------------------');
for(var i = 300; i<333;i++){
    if((i % 2) != 0){
        console.log(i);
    }
}


//Number divisible by 5 AND 3  between 5 and 50
console.log('------------------------------------------');
for(var i = 5; i < 50; i++){
    if(i%5 == 0 && i%3 == 0){
        console.log(i);
    }
}