const button = document.querySelector('button');

button.addEventListener('click', function onclick(event){
    document.body.classList.toggle('colorwhite');
    document.body.style.color = 'black';
});