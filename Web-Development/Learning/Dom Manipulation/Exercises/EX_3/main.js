var state = true;
function js_style(){
    state = !state;
    var p = document.querySelector('#text');
    if(state){
        p.style.color = 'black';
    }else{
        p.style.color = 'red';
    }    
}