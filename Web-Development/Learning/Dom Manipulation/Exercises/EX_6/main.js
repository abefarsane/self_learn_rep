var btn = document.querySelector('button');

btn.addEventListener('click', function(){
    document.body.style.background = document.body.style.background === 'red' ? 'white' : 'red';
});