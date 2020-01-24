/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer,dice,current_0,current_1,gamePlay;
var nowDice,beforeDice=6;
init();

document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlay){
        
        //1. Random Number
        dice=Math.floor(Math.random()*6)+1; 
        
        //2.Display the Result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display='block';
        diceDOM.src="dice-"+dice+'.png';
        if(dice===6 && beforeDice===6){
            //reset when 6x6
            score[activePlayer]=0;
            roundScore=0;
            document.querySelector('#current-'+activePlayer).textContent=roundScore;
            document.querySelector('#score-'+activePlayer).textContent='0';
            nextPlayer();
        }else{
        
                //3.Update the round score if rolled number is not 1;
                if(dice !== 1){
                    //Add Score
                    roundScore += dice;
                    document.querySelector('#current-'+activePlayer).textContent=roundScore;
                }else{
                    //Next Player
                    nextPlayer();
                    //document.querySelector('.player-0-panel').classList.remove('active');
                    //document.querySelector('.player-1-panel').classList.add('active');
                }
            }
        }
    beforeDice=dice;
});

var inputs=100;
document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlay){
     score[activePlayer]+=roundScore;
     document.querySelector('#score-'+activePlayer).textContent= score[activePlayer];
    
     inputs= document.querySelector('.score').value;
     inputs = inputs==='' || inputs===null ? 100 :inputs;
     console.log(inputs); 
        
    //Check if the player won the game
        if(score[activePlayer]>=inputs){
            gamePlay=false;
            document.querySelector('#name-'+activePlayer).textContent= 'Winner!';
            document.querySelector('.dice').style.display='none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        }else{
             nextPlayer();
        }
    }
});

function nextPlayer(){
   //Next Playyer
        activePlayer ===1 ? current_1.textContent=0: current_0.textContent=0;  
        activePlayer = activePlayer === 1 ? 0:1;
        roundScore=0;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display='none'; 
}


document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    score=[0,0];
    activePlayer=0;
    roundScore=0;
    gamePlay=true;
    dice=0;
    
    document.querySelector(".dice").style.display='none';
    
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    current_0 = document.getElementById('current-0');
    current_0.textContent='0';
    current_1 =document.getElementById('current-1');
    current_1.textContent='0';
    
    document.getElementById('name-0').textContent= 'Player 1';
    document.getElementById('name-1').textContent= 'Player 2';
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
};

