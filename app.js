let joseph = document.querySelector('.text');
let blueBox = document.querySelector('.colored');

function changeJoseph() {
joseph.textContent = 'This is a better text 🤖';
}

function changeColor() {
    joseph.style.setProperty( 'background-color','red' );
    joseph.style.setProperty( 'font-family','Times' );
}

function bodySkew() {
    document.body.classList.add('skew');
};

blueBox.addEventListener('mouseover', function() {
    document.body.classList.add('skew');
});

blueBox.addEventListener('mouseout', function() {
    document.body.classList.remove('skew');
});

// Gallery

let pictures = [ 'img/1-sky.jpg', 'img/2-sky.jpg', 'img/3-sky.jpg', 'img/4-sky.jpg' ];
let image = document.querySelector('.image img');

let i = 1;
function changeImages() {
    if (i == pictures.length) {
        i = 0;
    };
    image.setAttribute('src', pictures[i]);
    i++;
}

// Change colors

function color() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    
    document.body.style.setProperty('background-color', 
    'rgb(' +red+ ',' +green+ ',' +blue+ ')');   
}

// Change Text on Resize

window.addEventListener('resize', function(){

    let originalText = 'The sky (or celestial dome) is everything that lies above the surface of the Earth, including the atmosphere and outer space.';
    let width = window.outerWidth;

    joseph.textContent='Stop resizing! It is already ' +width+ ' pixels wide 😓';

    setTimeout(function(){
        joseph.textContent = originalText;
    }, 2000);

});

// Change input 

let input = document.querySelector('.input');
let bigText = document.querySelector('.big-text');
function modifyBigText() {
    bigText.textContent = input.value;
}
