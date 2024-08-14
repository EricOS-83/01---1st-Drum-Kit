// Find the number of drum kit buttons 


var NumberOfButtons = document.querySelectorAll(".button").length;



// Detecting button press section 

for(i=0;i<NumberOfButtons;i++){

document.querySelectorAll(".button")[i].addEventListener("click", playAudio);

}


function playAudio(){

// This will get the text inside the button-text span, such as "A", and remove any extra whitespace around it. 
// textContent is used instead of innerHTML to avoid grabbing any HTML tags, ensuring you only get the text.     

var buttonInnerHTML = this.querySelector('.button-text').textContent.trim();

//Passing the buttonInnerHTML to makeSound function, order to play the wav file.

makeSound(buttonInnerHTML);

}

// Detecting keyboard press section.

document.addEventListener("keydown", function(key){
    makeSound(event.key);
});

function makeSound(key){

    switch(key){
        case "A":
        case "a":
            var clap = new Audio("sounds/clap.wav");
            clap.play();
            break;
        case "S":
        case "s":
            var hihat = new Audio("sounds/hihat.wav");
            hihat.play();
            break;
        case "D":
        case "d":
            var kick = new Audio("sounds/kick.wav");
            kick.play();
            break;
        case "F":
        case "f":
            var openhat = new Audio("sounds/openhat.wav");
            openhat.play();
            break;
        case "G":
        case "g":
            var boom = new Audio("sounds/boom.wav");
            boom.play();
            break;
        case "H":
        case "h":
            var ride = new Audio("sounds/ride.wav");
            ride.play();
            break;
        case "J":
        case "j":
            var snare = new Audio("sounds/snare.wav");
            snare.play();
            break;
        case "K":
        case "k":
            var tom = new Audio("sounds/tom.wav");
            tom.play();
            break;
        case "L":
        case "l":
            var tink = new Audio("sounds/tink.wav");
            tink.play();
            break;
        default:
            text = "Not Supported";
    }
    }    
    

