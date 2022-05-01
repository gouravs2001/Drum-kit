//Keyboard events
document.addEventListener("keydown",function(event)
{
  makesound(event.key);
  buttonAnimation(event.key);
});
//Mouse clicks events
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function ()
  {
    var innerHTML=this.innerHTML;
    makesound(innerHTML);
    buttonAnimation(innerHTML);
  });
}
//Playing Sound
function makesound(key){
  switch(key)
  {
    case "w":
    var audio=new Audio('sounds/tom-1.mp3');
    audio.play();
    break;

    case "a":
    var audio=new Audio('sounds/tom-2.mp3');
    audio.play();
    break;

    case "s":
    var audio=new Audio('sounds/tom-3.mp3');
    audio.play();
    break;

    case "d":
    var audio=new Audio('sounds/tom-4.mp3');
    audio.play();
    break;

    case "j":
    var audio=new Audio('sounds/snare.mp3');
    audio.play();
    break;

    case "k":
    var audio=new Audio('sounds/crash.mp3');
    audio.play();
    break;

    case "l":
    var audio=new Audio('sounds/kick-bass.mp3');
    audio.play();
    break;
  }
}
function buttonAnimation(buttonPressed)
{
  var pressedButton=  document.querySelector("."+ buttonPressed);
pressedButton.classList.add("pressed");//adding class
  setTimeout(function()
{
  pressedButton.classList.remove("pressed");//removing class after 0.1 seconds
} , 100);
}
