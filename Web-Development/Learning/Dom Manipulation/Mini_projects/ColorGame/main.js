var difficultyChanged = false;


var difficultyBtnEASY = document.querySelector('#easy').addEventListener('click', function(){
    var difficulty = 3;
    var colori = randColorGenerator(3);
    var pickedColor = colori[Math.floor(Math.random() * difficulty)];
    var squares = document.querySelectorAll('.square');
    var titleRGB = document.querySelector('#rgbColor');
    var statusMessage = document.querySelector('#message');
    titleRGB.textContent = pickedColor.toUpperCase();

    setColorSquares(squares,colori,difficulty);

    for(var i = 0; i < squares.length; i++){
        squares[i].addEventListener('click', function(){
            if(this.style.backgroundColor === pickedColor){
                for(var i = 0; i < 3; i++){
                    squares[i].style.backgroundColor = titleRGB.textContent;
                }
                statusMessage.textContent = 'You won!';
            }else{
                this.style.backgroundColor = '#232323';
                statusMessage.textContent = 'Try again!';
            }
        })
    }
});

var difficultyBtnHARD = document.querySelector('#hard').addEventListener('click', function(){
    var difficulty = 6;
    var colori = randColorGenerator(6);
    var pickedColor = colori[Math.floor(Math.random() * difficulty)];
    var squares = document.querySelectorAll('.square');
    var titleRGB = document.querySelector('#rgbColor')
    var statusMessage = document.querySelector('#message');
    titleRGB.textContent = pickedColor.toUpperCase();
    difficultyChanged = true;

    setColorSquares(squares,colori,difficulty);

    for(var i = 0; i < 6; i++){
        squares[i].addEventListener('click', function(){
            if(this.style.backgroundColor == pickedColor){
                for(var i = 0; i < squares.length; i++){
                    squares[i].style.backgroundColor = titleRGB.textContent;
                }
                statusMessage.textContent = 'You won!';
            }else{
                this.style.backgroundColor = '#232323';
                statusMessage.textContent = 'Try again!';
            }
        })
    }
});

function randColorGenerator(difficulty){
    var colorArray = [];

    for(var i = 0; i < difficulty; i++){
        colorArray[i] =   'rgb(' + Math.floor(Math.random() * 255)
                        + ', '   + Math.floor(Math.random() * 255)
                        + ', '   + Math.floor(Math.random() * 255)
                        + ")";
    };
    console.log(colorArray);
    return colorArray;
}

function setColorSquares(squares,colori,difficulty){
    if(difficulty == 3 && difficultyChanged){
        resetColors(squares);
    }else{
        for(var i = 0; i < difficulty; i++){
            squares[i].style.backgroundColor = colori[i];
        }
    }
}


function resetColors(squares){
    for(var i = 3; i < 6; i++){
        squares[i].style.backgroundColor = '#232323';
    }
}