var scores, roundScores, activePlayer, gamePlaying;


document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying){
        var dice = Math.floor(Math.random() * 6) + 1;
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src= 'dice-' + dice + '.png';

        if(dice !== 1){
            roundScores += scores;
            document.querySelector('#current' + activePlayer).textContent = roundScores;
        } else {
            nextPlayer();
        }
    }
 });
// score 객체의 activePlayer 라는 속성값에 roundScore를 더해서 새로 할당하는 것 
document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying){
        scores[activePlayer] += roundScores;

        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        if(scores[activePlayer] >= 100) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});