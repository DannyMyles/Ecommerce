// HAMBAGER MENU 
// Making the hambager menu clickable, I want to make it when you click the hambager menu on small screens it displays the navbar 

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

// I want to check if the navbar is already opened or not 
if (bar){
    bar.addEventListener('click',() =>{
        nav.classList.add('active'); //This classList of active must be added to the stylesheet
    })
}

// Adding an event listener to close the navbar on clock if it is open
if (close){
    close.addEventListener('click',() =>{
        nav.classList.remove('active'); //This classList of active must be added to the stylesheet
    })
}
// HAMBAGER MENU 