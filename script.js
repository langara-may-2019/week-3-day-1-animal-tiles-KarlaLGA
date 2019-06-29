// Let's make something useless, but it has concepts in here that you can use somewhere else. 

// 1. We are going to add audio clips to some of the images, so that when an event happens, it will play that audio clip. 
// I chose 3 audio clips, that you can see in the "audio" folder. You can add your own, if you like. 

// 1a. Declare a constant variable, and make it equal to the value of new Audio. To find out what this does, look up this link:
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement
// in the round brackets, we will be putting the path to our audio clip

    const dogSound = new Audio ('/audio/dog_bark.mp3');


// const sound = new Audio("/folder/filename");

// 1b. Declare constant variables for all your audio clips.


    const mouseSound = new Audio ('/audio/mouse.wav');
    const monkeySound = new Audio ('/audio/monkey.mp3');
    const catSound = new Audio ('/audio/cat.wav');
    const chickSound = new Audio ('/audio/chick.wav');
    const cowSound = new Audio ('/audio/cow.wav');
    const bearSound = new Audio ('/audio/bear.wav');
    const sheepSound = new Audio ('/audio/sheep.mp3');
    const owlSound = new Audio ('/audio/owl.wav');
    const pigSound = new Audio ('/audio/pig_oink.mp3');
    const penguinSound = new Audio ('/audio/penguin.wav');
    const elephantSound = new Audio ('/audio/elephant.mp3');



// 2. Now the jQuery. You're a pro by now, so select the image from the HTML, and add an event to it. 
//It can be any event you like, there are hundreds to choose from, so try out something new. Maybe even a keyboard event, if you like. 
//If you want to see a list of them, this is a great resource: http://overapi.com/jquery

$("#dog").click(function(){
        console.log('bark');
        dogSound.play();
})

$("#mouse").click(function(){
    console.log('mouse');
    mouseSound.play();
})

$("#monkey").click(function(){
    console.log('monkey');
    monkeySound.play();
})

$("#cat").click(function(){
    console.log('cat');
    catSound.play();
})

$("#chick").click(function(){
    console.log('chick');
    chickSound.play();
})

$("#cow").click(function(){
    console.log('cow');
    cowSound.play();
})

$("#bear").click(function(){
    console.log('bear');
    bearSound.play();
})

$("#sheep").click(function(){
    console.log('sheep');
    sheepSound.play();
})

$("#owl").click(function(){
    console.log('owl');
    owlSound.play();
})

$("#pig").click(function(){
    console.log('pig');
    pigSound.play();
})

$("#penguin").click(function(){
    console.log('penguin');
    penguinSound.play();
})

$("#elephant").click(function(){
    console.log('elephant');
    elephantSound.play();
})

// 2a. Inside the callback function, we want the sound to play, right? So to our variable, we are going to use the play method. 
//Seems almost too easy...🤫

// sound.play();
// Try it out, see if it works


// 3. Now the exciting part. You may have noticed that in the HTML I have linked to not only jQuery, but also a library called jQueryUI. 
//There are a few things that you can use with this library, like icons and such. But what I like using it for is the sortable method. 
//This is not really coding, since I'm giving the answer to you, but it is used a lot, so it is nice to have it in your memory bank.

// uncomment the code below:
$(".draggable").sortable({
    classes: {
        "ui-sortable":"highlight"
    }
});

$( ".selector" ).sortable( "option", "classes.ui-sortable", "highlight" );


// now go try it out. Drag the tiles around and rearrange them. 
// Pretty cool, right? Imagine what you could do with this! if you have to make a todo list again, 
//you could have the results be able to be resorted and shuffled. You could make a memory game, and animate the cards flipping. 
//You could add it to your app, and the user could reshuffle their favorite choices of restaurants in the UI...possibilites are endless.

// STRETCH (optional): add a div under the animal cards, and print out in the div which card is being moved. 
//For example, if the cow picture is moved, it would print out "The Cow was Moved!". 
//Prepend them to the div as a list, or, even better, make the text fade out, and only show one entry at a time. 