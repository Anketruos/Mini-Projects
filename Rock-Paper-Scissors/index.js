const choices=["rock" , "paper" , "scissors"];
let output=document.getElementById("output");
let playerschoice=document.getElementById("playerschoice");
let computerschoice=document.getElementById("computerschoice");

let playerscore=document.getElementById("playerscore");
let computerscore=document.getElementById("computerscore");

let playercount=0;
let computercount=0;


function gameplay(imput)
{
  const newcomputerschoice = choices[Math.floor(Math.random()*3)];
  let result="";

  if(newcomputerschoice===imput)
  {
    result="ITS A TIE!";
  }
  else
  {
    switch(imput)
    {
      case "rock":
        result=(newcomputerschoice=="scissors")? "YOU WON!":"YOU LOST!";
        break;
        case "paper":
        result=(newcomputerschoice=="rock")? "YOU WON!":"YOU LOST!";
        break;
        case "scissors":
        result=(newcomputerschoice=="paper")? "YOU WON!":"YOU LOST!";
        break;
    }

  }

  playerschoice.textContent=imput;
  computerschoice.textContent=newcomputerschoice;
 
output.classList.remove("greencolor" , "redcolor");
  switch(result)
  {
    case "YOU WON!":
      output.classList.add("greencolor");
      playercount++;
      playerscore.textContent=playercount;
      break;
    case "YOU LOST!":
      output.classList.add("redcolor");
      computercount++
      computerscore.textContent=computercount;
      break;
  }

 output.textContent=result;

}