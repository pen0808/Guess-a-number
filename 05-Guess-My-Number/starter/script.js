'use strict';
const guessmessage = document.querySelector('.message');
let randomnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
function displaymessage(message){
  guessmessage.textContent = message;
}
//const computernumber = document.querySelector('.number').textContent = randomnumber;

document.querySelector('.check').addEventListener('click',function(){
  const inputguess = Number(document.querySelector('.guess').value);
  
   
  if(!inputguess){
    //guessmessage.textContent = "⛔ Incorrect number."
    displaymessage("⛔ Incorrect number.");
  }
  else if(inputguess === randomnumber){
  
    //guessmessage.textContent = "✅ Correct";
    displaymessage("✅ Correct");
    score++;
    document.querySelector('.number').textContent = randomnumber;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.fontSize = '10rem';
    document.querySelector('h1').textContent = `🎉Congratulations !!🎉`;
    document.querySelector('h2').textContent = `You are a Winner`;

    if(score > highscore){
    highscore = score
    document.querySelector('.highscore').textContent = highscore;
     }
  }
  
  else if(inputguess !== randomnumber){
    if(score > 1){
     // guessmessage.textContent = inputguess > randomnumber? "⬆️ Too High" : "⬇️ Too Low" ;
      displaymessage(inputguess > randomnumber? "⬆️ Too High" : "⬇️ Too Low");
      score--;
      document.querySelector('.score').textContent = score;
    }
    else{
      guessmessage.textContent = "Game Over";
      document.querySelector('.score').textContent =0;
    }

  }
    
}) 
document.querySelector('.again').addEventListener('click', function(){
  document.querySelector('.guess').value = "";
  score = 20;
  document.querySelector('.score').textContent = 20;
  guessmessage.textContent = "Start guessing...";
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').style.fontSize = '6rem';
  document.querySelector('h1').textContent = `Guess My Number!`;
  document.querySelector('h2').textContent = '';
  document.querySelector('.number').textContent = '?';
  randomnumber = Math.trunc(Math.random() * 20) + 1;
})
// emoji = windows + .
 