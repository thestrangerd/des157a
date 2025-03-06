


(function(){
    'use strict';
    console.log('reading js');

    document.querySelector('#start-button').addEventListener('click', function(){
        document.querySelector('#title-screen').style.display = 'none';
        document.querySelector('#game-container').style.display = 'block';
    });

})();