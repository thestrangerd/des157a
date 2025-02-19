


(function(){
    'use strict';
    console.log('reading js');


    // CONVEYOR BELT
    const stuffie = document.querySelectorAll('.stuffie');
    const bigbun = document.querySelector('.bigbun');

    stuffie.forEach(function(images) {

        images.addEventListener('mouseover', function(){
            let glowColor = '';

            if (images.classList.contains('bunbun') || images.classList.contains('bigbun')) {
                glowColor = 'hotpink';
            } else if (images.classList.contains('bolt')) {
                glowColor = 'skyblue';
            } else if (images.classList.contains('bunny')) {
                glowColor = 'lightgreen';
            } else if (images.classList.contains('peppers')) {
                glowColor = 'orange';
            } else if (images.classList.contains('penguin')) {
                glowColor = 'rgb(124, 18, 124)';
            } 

            images.style.filter = `drop-shadow(0 0 8px ${glowColor}) grayscale(0%) saturate(1.2)`;
            images.style.cursor = 'pointer';
        });

        images.addEventListener('mouseleave', function() {
            images.style.filter = 'drop-shadow(0 0 3px white) grayscale(100%)';
        });
    });



    // ONCLICK OVERLAY

    const overlay = document.querySelector('#overlay');

    document.querySelector('.bigbun').addEventListener('click', function(event){
        event.preventDefault();
        overlay.className = 'showing';
        bigbun.className = 'stuffie bigbun active';
        bigbun.style.filter = 'drop-shadow(0 0 8px hotpink) grayscale(0%) saturate(1.2)';

        document.addEventListener('keydown', function(event) {
            event.preventDefault();
            if (event.key === 'Escape') {
                overlay.className = 'hidden';
                bigbun.classList.remove('active');
                bigbun.style.filter = 'drop-shadow(0 0 3px white) grayscale(100%)';
            }
        });
    });



    
    // ONCLICK OVERLAY

    const closeBtn = document.querySelector ('.close');

    closeBtn.addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('.showing').className = 'overlay hidden';
        bigbun.style.filter = 'drop-shadow(0 0 3px white) grayscale(100%)';
    });




    // ON REFRESH CART ANIMATION ACTIVATES

    const cart = document.querySelector('#cart');

    window.onload = function() {
        console.log('cart moves in');
        cart.style.animation = 'cartMove 2s ease forwards'
    }


})();