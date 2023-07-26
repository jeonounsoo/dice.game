
var numberOfDrumButton = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButton; i++) {

 document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

});

}

document.addEventListener("keypress", function(event) {
  
  makeSound(event.key);

  buttonAnimation(event.key)

});

function makeSound(key) {
  switch (key) {
    case "e":
      var guitar = new Audio("sounds/guitar.mp3");
      guitar.play();
      break;

    case "n":
      var guitar1 = new Audio("sounds/guitar1.mp3");
      guitar1.play();
      break;

    case "s":
      var drum1 = new Audio("sounds/drum1.mp3");
      drum1.play();
      break;

    case "z":
      var drum = new Audio("sounds/drum.mp3");
      drum.play();
      break;
      
    case "j":
      var tom = new Audio("sounds/tom.mp3");
      tom.play();
      break;
    
    case "k":
      var pianog = new Audio("sounds/pianog.mp3");
      pianog.play();
      break;

    case "y":
      var pianor = new Audio("sounds/pianor.mp3");
      pianor.play();
      break;
            
    case "a":
      var pianos = new Audio("sounds/pianos.mp3");
      pianos.play();
      break;

   default: console.log(key)
  }
}


function buttonAnimation(currentKye) {

  var activeButton = document.querySelector("." + currentKye);

  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}
