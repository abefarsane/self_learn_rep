var h1 = document.querySelector('h1');
var body = document.querySelector('body');
var isBlue = false;


setInterval(function(){
    if(isBlue){
        body.style.background = 'white';
        h1.style.color = 'black';
    }else{
        body.style.background = 'blue';
        h1.style.color = 'white';
    }


    isBlue = !isBlue;
},1000);
