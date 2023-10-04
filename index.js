//prior completed lab

/*
const input = document.getElementById('button');

function addingEventListener() {
    function clickAlert() {
        alert('I was clicked!');
    }

    input.addEventListener('click', clickAlert);
}

input.addEventListener('click', addingEventListener);

*/

//new lab during phase 01


const inputButton = document.getElementById('button');

//inputButton.addEventListener('click', e => alert('I was clicked'));

function addingEventListener(){
    function clickAlert() {
        alert('You clicked me!')
    }
    
    inputButton.addEventListener('click', clickAlert)
}

inputButton.addEventListener('click', addingEventListener)