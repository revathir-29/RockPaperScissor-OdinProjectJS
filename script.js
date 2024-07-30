const options=["rock" , "paper" , "scissor"];
function game(){

}
function getComputerChoice(){
    const choice=options[Math.floor(Math.random()*options.length)];
    return choice;
}
function checkWinner(playerSelection, ComputerSelection){
    if(playerSelection=== ComputerSelection){
        return "Tie";
    }
    else if((playerSelection=="rock" && ComputerSelection=="scissor") || (playerSelection=="scissor" &&ComputerSelection=="paper")||(playerSelection=="paper" && ComputerSelection=="rock")){
         return "Player";

        }
    
    else {
        return "Computer";
    }
}

function playRound(playerSelection, ComputerSelection){
    const result=checkWinner(playerSelection, ComputerSelection);
    if(result=="Tie"){
        return "It's a Tie!";
    }
    else if(result=="Player"){
        return `You Win! ${playerSelection} beats ${ComputerSelection}`;
    }
    else{
        return `You Lose! ${ComputerSelection} beats ${playerSelection}`;
    }


}
function getPlayerChoice(){
    let validateInput=false; 
    while(validateInput==false){
        const choice=prompt("Rock Paper Scissor");
        if(choice==null){
            continue;
        }
        const choiceInLower=choice.toLocaleLowerCase();
        if(options.includes(choiceInLower)){
            validateInput==true;
            return choiceInLower;
        }
    } 


}
function game(){
    let scorePlayer=0;
    let scoreComputer=0;
    for(let i=0;i<5;i++){
        const playerSelection=getPlayerChoice();
        const ComputerSelection=getComputerChoice();
        console.log(playRound(playerSelection,ComputerSelection));
        if(checkWinner(playerSelection,ComputerSelection)=="Player"){
            scorePlayer++;

        }
        else if(checkWinner(playerSelection,ComputerSelection)=="Computer"){
            scoreComputer++;
        }
    }
    console.log("Game Over");
    if(scorePlayer>scoreComputer){
        console.log("Player was the Winner");
    }
    else if(scorePlayer<scoreComputer){
        console.log("Computer was the Winner");
    }
    else{
        console.log("We have a Tie!");
    }
}
game();

