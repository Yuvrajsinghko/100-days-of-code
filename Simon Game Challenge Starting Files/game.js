let gamePattern = [];

let buttonColors = ["red", "blue", "green", "yellow"];

let userClickedPattern = [];

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playAudio(randomChosenColor);

}

function playAudio(name) {
  let sound = new Audio("sounds/"+name+".mp3");
  console.log(name);
  console.log(sound);
  sound.play();
}

$(".btn").click(function () {
  let userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);
  playAudio(userChosenColour);
});
