


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

    const capy1 = document.querySelector('#capy1');
    const capy2 = document.querySelector('#capy2');
    const swimBtn = document.querySelector('#swim-button');


    const gameData = {
        players: ['Capy 1', 'Capy 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0, // keeps track of player currently playing 0-1
        gameEnd: 49,
        capy1Position: 0,
        capy2Position: 0
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

        swimBtn.addEventListener('click', function() {
            throwDice();
        })
    }



    function throwDice() {
        // randomize rolls
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;

        const moveLines = [
            `${gameData.players[gameData.index]} feels strangely determined. Keep swimming!`,
            `${gameData.players[gameData.index]} wants the tangerine badly. Keep swimming!`,
            `${gameData.players[gameData.index]} likes the splashing sounds. Keep swimming!`,
            `${gameData.players[gameData.index]} wants to keep going. Keep swimming!`,
        ];

        const skipLines = [
            `${gameData.players[gameData.index]} gets distracted by the splashing! Switch players.`,
            `${gameData.players[gameData.index]} is too busy playing in the water! Switch players.`,
            `${gameData.players[gameData.index]} feels bored swimming. Switch players.`,
            `${gameData.players[gameData.index]} needs a little rest. Switch players.`,
            `${gameData.players[gameData.index]} wonders if the effort is worth it. Switch players.`,
        ];

        // move capybaras depending on roll, randomizes line
        text.innerHTML = moveLines[Math.floor(Math.random() * moveLines.length)];



        // if either roll = 1 then skip player
        if (gameData.roll1 === 1 || gameData.roll2 === 1) {
            // randomize skip lines in array
            text.innerHTML = skipLines[Math.floor(Math.random() * skipLines.length)];
            
            // prevents button use when switching players
            swimBtn.disabled = true;

            setTimeout(function() {
                gameData.index = gameData.index === 0 ? 1 : 0;
                console.log(`Switched to player: ${gameData.players[gameData.index]}`);
                console.log(gameData.roll1, gameData.roll2);

                swimBtn.disabled = false;
                setUpTurn();
            }, 1500);
            
        }
        else {
            // if neither = 1, update distance of current player
            movePlayer();
            gameData.score[gameData.index] += gameData.rollSum;
        }

        checkWinningCondition();
    }



    function movePlayer() {
        // move player right by 20px
        const moveAmount = 25;

        if (gameData.index === 0) {
            gameData.capy1Position += moveAmount;
            capy1.style.transform = `translateX(${gameData.capy1Position}px)`;
        } else {
            gameData.capy2Position += moveAmount;
            capy2.style.transform = `translateX(${gameData.capy2Position}px)`;
        }
    }



    function checkWinningCondition() {
        if (gameData.score[gameData.index] >= gameData.gameEnd) {
            // win screen shows up
            // text shows which capy won
            // button starts a new game
        }
    }


})();