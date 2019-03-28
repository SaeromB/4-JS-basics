/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/
var scores, roundScore, activePlayer;
scores = [0, 0];
roundScore = 0;
activePlayer = 0;

// current active player
// math.random => will give me a random number between 0~1
// 소수점이 나오기 때문에 *6 을 해줌
// 아직 소수점이 나오기 때문에 math.floor() 를 통해 소수점 없애기


// dice = Math.floor(Math.random() * 6) + 1;
// document.querySelector('#current-' + activePlayer).textContent = dice;
// innerHTML로 인하여 current dice 의 숫자 디자인을 변경시켜줌
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// different between textContent vs innerHTML
// textContent 은 text만 나타내고 innerHTML 을 사용하면 실제 HTML를 실행함 

// how to read the vlaue by using querySelector
// var x = document.querySelector('#score-0').textContent;
// console.log(x);

// function btn() {

// }
// btn();

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent ='0';
document.getElementById('score-1').textContent ='0';
document.getElementById('current-0').textContent ='0';
document.getElementById('current-0').textContent ='0';


document.querySelector('.btn-roll').addEventListener('click', function(){
    // 1.Random number
    var dice = Math.floor(Math.random() * 6) + 1;
    // 2.display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    // 3. Update the round score IF the rolled number was NOT a 1
    // dice !== 1 dice is diffenent compaired to 1
    if (dice !== 1) {
        // add score
        roundScore += dice;
        //roundScore = roundScore + dice;
        // if the activePlayer is 1 the textcontent shows
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        // reset otherplayer back to zero
        roundScore = 0;
        // if(activePlayer === 0) {
        //     activePlayer = 1;
        // } else {
        //     activePlayer = 0;
        // }

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        // document.querySelector('.player-0-panel').classList.remove('active');
        // document.querySelector('player-1-penel').classList.add('active');

        document.querySelector('.dice').style.display = 'none';

    
    }
});

// 해당 function은 한번만 이용할 수 있음
document.querySelector('.btn-hold').addEventListener('click', function() {
    // Add Current score to Global score
    scores[activePlayer] += roundScore;
    
    // update the UI(dom munipulation?)
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    // check if player won the game
    // next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById
});

