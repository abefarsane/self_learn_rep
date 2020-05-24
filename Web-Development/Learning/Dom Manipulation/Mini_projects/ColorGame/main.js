//Take the elements from the HTML 'code'
var spans = document.querySelectorAll('span')
var btns = document.querySelectorAll('button')
var squares = document.querySelectorAll('square')
var h1 = document.querySelector('h1')
var easyOrNot = true;
var pickedColor = ''
var colors = []
//Function that starts the game

fillArrayClrs()
console.log(colors)
setSQRColors('casual')

//Add event listeners
btns[0].addEventListener('click', function(){
    changeColors()
})

btns[1].addEventListener('click', function(){
    if(this.classList == 'selected'){
        changeColors()
    }else{
        easyOrNot = true
        this.classList.add('selected')
        btns[2].classList.remove('selected')
    }
})

btns[2].addEventListener('click', function(){
    if(this.classList == 'selected'){
        changeColors()
    }else{
        easyOrNot = false
        this.classList.add('selected')
        btns[1].classList.remove('selected')
    }
})

for(var i = 0; i < squares.length; i++){
    squares[i].addEventListener('click', function(){
        if(this.style.backgroundColor == pickedColor){
            setSQRColors(pickedColor)
            h1.style.backgroundColor = pickedColor
            span[1].textContent = 'Yeah! You won'
        } else{
            span[1].textContent = 'Try again bro'
        }
    })
}

//Functions for changing colorsk
function fillArrayClrs(){
    if(easyOrNot){
        for(var i = 0; i < 3; i++){
            colors[i] = randRGBGen()
        }
    }else{
        for(var i = 0; i < 6; i++){
            colors[i] = randRGBGen()
        }
    }

    pickedColor = colors[Math.floor(Math.random() * colors.length)]
}

function randRGBGen(){
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)

    var rgb = 'rgb(' + r + ', ' + g + ', ' + b + ')'
    return rgb
}

function setSQRColors(color){
    spans[0].textContent = pickedColor.toUpperCase()
    
    if(color == pickedColor){
        for(var i = 0; i < colors.length; i++){
            squares[i].style.backgroundColor = color
        }
    } else if(color == 'casual'){
        for(var i = 0; i < colors.length; i++){
            squares[i].style.backgroundColor = colors[i]
        }
    }
}