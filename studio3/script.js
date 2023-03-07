(function(){
    'use strict';
    console.log('reading js');

    document.querySelector('#help').addEventListener('click', function(){
        document.getElementById('overlay').className = 'showing';
        startGame.remove();
        document.querySelector('article').innerHTML = `<h2>game of quack</h2>
        <p>There are two players. The player whose turn it is rolls the dice. The total of the roll is added to the current player's score, unless either die comes up as a "one". If this happens, this player's turn is over, and it is the other player’s turn. After each roll, the current player can either roll again, (assuming a "one" was not rolled) or if the current player feels that luck is running thin, they can pass to the other player. The first player to get 30 points or higher wins.</p> 
        <p>Oh, and if you roll two "ones" (snake eyes), your current score gets zeroed out. So don’t do that.</p> <button id="close">close</button>`
        document.querySelector('#close').addEventListener('click', function(){
            document.getElementById('overlay').className = 'hidden';

        })
    })

    const startGame = document.getElementById('startgame');
        const player = document.getElementById('player');
        const game = document.getElementById('game');
        const score1 = document.getElementById('player1score');
        const score2 = document.getElementById('player2score');
        const actionArea = document.getElementById('roll');
        const scroll = document.getElementById('scroll');
        const scroll2 = document.getElementById('scroll2');
       

        const gameData = {
            dice: ['images/dice1.png', 'images/dice2.png', 'images/dice3.png', 'images/dice4.png', 'images/dice5.png', 'images/dice6.png'],
            players: ['images/player1.png', 'images/player2.png'],
            score: [0,0],
            roll1: 0,
            roll2: 0,
            rollSum: 0,
            index: 0,
            gameEnd: 29,

        };


        startGame.addEventListener('click', function(){
            document.getElementById('overlay').className ='hidden';
            gameData.index=Math.round(Math.random());
            console.log(gameData.index);
            
            document.getElementById('restart').addEventListener('click', function(){
                    location.reload();
            });
            setUpTurn();
        })

        function addSlot() {
            document.getElementById('dice').remove();
            document.getElementById('dice2').remove();
            game.appendChild(scroll);
            game.appendChild(scroll2);
                    
        }

        function setUpTurn(){
            player.innerHTML = `<img id="duck" src="${gameData.players[gameData.index]}">`;
            actionArea.innerHTML = '<img id="roll" src="images/rollbutton.png" alt="roll button">';
            document.getElementById('roll').addEventListener('click', function(){
                scroll.remove();
                scroll2.remove();
                throwDice();
            });
        }

        function throwDice() {
            
            gameData.roll1 = Math.floor(Math.random() * 6) + 1;
            gameData.roll2 = Math.floor(Math.random() * 6) + 1;


    
            setTimeout(addSlot, 2000);
            
            
            game.innerHTML += `<img id="dice" src="${gameData.dice[gameData.roll1-1]}">
                                <img id="dice2" src="${gameData.dice[gameData.roll2-1]}">`;
            gameData.rollSum = gameData.roll1 + gameData.roll2;

            if (gameData.rollSum === 2) {

                player.innerHTML = '<img src="images/snake.png">';
                gameData.score[gameData.index] = 0;
                gameData.index ? (gameData.index = 0) : (gameData.index =1);
                showCurrentScore();
                setTimeout(setUpTurn, 2000);
                console.log('snake eyes were rolled');
            }
            else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
                gameData.index ? (gameData.index = 0) : (gameData.index =1);
                player.innerHTML = '<img src="images/rolledone.png">';
                setTimeout(setUpTurn, 2000);
                console.log('one of the two dice was a 1');
            }

            else {
                gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
                actionArea.innerHTML = '<img id="roll" src="images/rollbutton.png" alt="roll button">';

                document.getElementById('roll').addEventListener('click',function(){
                    setUpTurn();
                });

    
                console.log('the game proceeds');
                checkWinningCondition();
            }

        }

        function checkWinningCondition(){
            if (gameData.score[gameData.index] > gameData.gameEnd){
                player.innerHTML = `<img id="duck" src="${gameData.players[gameData.index]}"> <h2 id="caption">wins with ${gameData.score[gameData.index]} points!</h2>`;


            }
            else {
                showCurrentScore();
                score1.innerHTML = `<img id="p1head" src="images/p1head.png" alt="player 1 headshot" width="25%"> <p id="score1">${gameData.score[0]}`
                score2.innerHTML = `<img id="p2head" src="images/p2head.png" alt="player 2 headshot" width="25%"> <p id="score2">${gameData.score[1]}</p>`
            }
        }
        
        function showCurrentScore(){
            score1.innerHTML = `<img id="p1head" src="images/p1head.png" alt="player 1 headshot" width="25%"> <p id="score1">${gameData.score[0]}`
            score2.innerHTML = `<img id="p2head" src="images/p2head.png" alt="player 2 headshot" width="25%"> <p id="score2">${gameData.score[1]}</p>`
        }

})();