


(function(){
    'use strict';
    console.log('reading js');


    const title = document.querySelector('#title-screen');
    const game = document.querySelector('#game-container');


    // ON START BUTTON CLICK, FADE GAME IN
    document.querySelector('#start-button').addEventListener('click', function(){

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
        
    });

})();