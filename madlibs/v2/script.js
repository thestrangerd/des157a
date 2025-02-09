


(function(){
    'use strict';
    console.log('reading js');

    document.querySelector('#submit').addEventListener('click', function(event) {
        event.preventDefault();

        const screen1 = document.querySelector('#screen1');
        const screen2 = document.querySelector('#screen2');

        screen1.className = "screen hidden";
        screen2.className = "screen showing";
    });

})();