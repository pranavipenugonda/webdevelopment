
var numOfButtons = document.querySelectorAll(".drum").length;


for(var i=0; i< numOfButtons; i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",handleClick)
}

function handleClick()
{
    var buttonValue = this.innerHTML;
    switch(buttonValue)
    {
        case('W'):
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
        break;
        case('A'):
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
        break;
        case('s'):
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
        break;
        case('D'):
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
        break;
        case('j'):
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
        break;
        case('K'):
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
        break;
        case('l'):
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
        break;


    }
}



// // alert(this.innerHTML);
    // var audio = new Audio('./sounds/tom-1.mp3');
    // audio.play();