//Detecting Button Press


var numbeOfDrumButton = document.querySelectorAll(".drum").length;

for (var i = 0; i <numbeOfDrumButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click" , function() {

//Detecting Keyboard Press


   var buttonInnerHTML = this.innerHTML;

  makeSound(buttonInnerHTML);

buttonAnimation(buttonInnerHTML);

  });

}



document.addEventListener("keypress", function (event) {

makeSound(event.key);

buttonAnimation(event.key);

});



function makeSound(key){
  switch (key) {
    case "w":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
      break;

      case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
        break;

        case "s":

        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
          break;

          case "d":
          var crash = new Audio("sounds/crash.mp3");
          crash.play();
            break;

            case "j":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
              break;

              case "k":
              var snare = new Audio("sounds/snare.mp3");
              snare.play();
                break;

                case "l":
                var tom2 = new Audio("sounds/tom-2.mp3");
             tom2.play();
                  break;

    default: console.log();

  }

}

function buttonAnimation(currentKey){

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed")
  }, 100);

}



var student = {
  firstName: "sai",
  lastName: "guduri",
  age:27
};



var persons = [{
  name: "sai",
  gender: "male",
  status: "married"
},
{
  name: "swe",
  gender: "feMale",
  status: "married"
},
{
  name: "kavya",
  gender: "feMale",
  status: "unMarried"
}]

console.log("persons", persons);

var malePersons = [];
var feMalePersons = [];
var married = [];
var unMarried = [];


for (var i = 0; i < persons.length; i++) {
  if (persons[i].gender === "male") {
    malePersons.push(persons[i].name);

  }
  else {
    feMalePersons.push(persons[i]);

  }
  if (persons[i].status === "married") {
    married.push(persons[i]);
  }
  else {
    unMarried.push(persons[i]);
  }

 }


 console.log("malePersons", malePersons);
 console.log("malePersons", feMalePersons);
 console.log("malePersons", married);
 console.log("malePersons", unMarried);












//var audio = new Audio("sounds/tom-1.mp3");
//audio.play();
