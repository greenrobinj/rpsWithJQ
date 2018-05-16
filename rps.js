

$(document).ready(function(){
  //====Players selection (.click = onclick)====
  $('.player').click (function(){
    var selection = $(this).attr('id')
    console.log(selection)
    compPlay()
  });
  
  //=====computer selection from an array=====
    function compPlay() {
      var  gameArray = [
        "rock",
        "paper",
        "scissors"
      ];
      var compChoice = gameArray[Math.floor(Math.random() * gameArray.length)];
      console.log(compChoice)
      return compChoice

      anwsers(selection, compChoice)
   };

  




  //if statment to compare anwsers
  function anwsers (selection, compChoice){
    if
      ((selection === "rock" && compChoice === 'scissors') ||  
      (selection === 'paper' && compChoice === 'rock') ||
      (selection === 'scissors' && compChoice === 'paper')){
        console.log ('winner')}
      
    else if (selection === compChoice){  
        console.log ('draw')}
    else {console.log ('loser')};
  };
});
