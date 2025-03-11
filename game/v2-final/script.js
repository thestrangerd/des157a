


(function(){
    'use strict';
    console.log('reading js');


    const body = document.querySelector('body');
    const title = document.querySelector('#title-screen');
    const game = document.querySelector('#game-container');
    const text = document.querySelector('#text');

    const startgame = document.querySelector('#start-button');
    const overlay = document.querySelector('.overlay');
    const closeBtn = document.querySelector('#close');


    const gameData = {
        dice: ['1die.jpg', '2die.jpg', '3die.jpg', 
                '4die.jpg', '5die.jpg', '6die.jpg'],
        players: ['Player 1', 'Player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0, // keeps track of player currently playing 0-1
        gameEnd: 29
    }



    // START GAME
    startgame.addEventListener('click', function(){

        // FADE IN FROM TITLE SCREEN
        // hide title screen
        title.style.opacity = 0;

        setTimeout(function() {
            title.style.display = 'none';
        }, 1000);

        // show game 
        setTimeout(function() {
            game.style.opacity = 1;
            game.style.display = 'block';
        }, 100);
        
        // -----------------------------------

        // TUTORIAL OVERLAY

        setTimeout(function() {
            overlay.style.opacity = 1;
            overlay.style.display = 'block';
        }, 100);

        closeBtn.addEventListener('click', function() {
            overlay.style.opacity = '0';
            overlay.style.zIndex = '-1';
        })

        // -----------------------------------  

        // determines random starting player
        gameData.index = Math.round(Math.random());
        console.log(gameData.index);

        setUpTurn();

    });



    function setUpTurn() {
        text.innerHTML = `It's ${gameData.players[gameData.index]}'s Turn!`
    }



})();