


var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(".btn").click(function(){
  var userChosenColour =$(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playsound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);

});


$(document).keypress(function(event){
if(!started){
  $("#level-title").text("level "+ level);
  nextSequence();
  started = true;
}
});

function checkAnswer(currentLevel){
if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
  console.log("success");

    if(gamePattern.length === userClickedPattern.length){
      setTimeout(function(){
      nextSequence();
      }, 1000);
  }
}else{
  console.log("wrong");
}
}


function nextSequence(){

level++;
$("#level-title").text("Level "+level)


var randomNumber = Math.floor(Math.random()*4);
var randomChosenColour = buttonColours[randomNumber];
gamePattern.push(randomChosenColour);

$("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
playsound(randomChosenColour);
}



function playsound(name){
  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}
function animatePress(currentColour){
  $("#"+currentColour).addClass(".pressed");
  setTimeout(function(){
    $("#"+currentColour).removeClass(".pressed");
  },100);
}
