//HOME POINT AND TRANSFER POINTS
var homePoint = document.querySelector('#home');
var homeP = 0;
var transfPoint = document.querySelector('#transfer');
var trnP = 0;


//BUTTONS FOR EACH PLAYER AND RESET BTN
var add1 = document.querySelector('#btn1');
var add2 = document.querySelector('#btn2');
var reset = document.querySelector('#reset');

//POINT COUNTER
var maxPoint = document.querySelector('#maxPoint');
var maxScore = document.querySelector('#maxScore');
var setMaxScore = document.querySelector('#setMaxScore');

var p = 0;



//OPERATIONS
add1.addEventListener('click', function(){
    homeP++;
    homePoint.textContent = homeP;
    checkWinOrLose(homePoint);
});

add2.addEventListener('click', function(){
    trnP++;
    transfPoint.textContent = trnP;
    checkWinOrLose(transfPoint);
});

reset.addEventListener('click',function(){
    homePoint.textContent = 0;
    transfPoint.textContent = 0;
    maxPoint.value = 0;
    maxScore.textContent = 0;
});

setMaxScore.addEventListener('click', function(){
    p = maxPoint.value;
    maxScore.textContent = p;
});



function checkWinOrLose(input){
    if(homeP == p){
        input.style.color = 'green';
        alert('Player number 1 WON!');
    }else if(trnP == p){
        input.style.color = 'green';
        alert('Player number 2 WON!!');
    }else{

    }
}