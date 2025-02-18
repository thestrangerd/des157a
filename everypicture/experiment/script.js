


(function(){
    'use strict';
    console.log('reading js');


    // CONVEYOR BELT
    const stuffie = document.querySelectorAll('.stuffie');

    stuffie.forEach(function(images) {

        images.addEventListener('mouseover', function(){
            let glowColor = '';

            if (images.classList.contains('bunbun')) {
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
            images.style.transform = 'scale(1.2)';
        });

        images.addEventListener('mouseleave', function(){
            images.style.filter = 'drop-shadow(0 0 3px white) grayscale(100%)';
            images.style.transform = 'scale(1)';
        });
    });



    // ON REFRESH CART ANIMATION ACTIVATES

    const cart = document.querySelector('#cart');

    window.onload = function() {
        console.log('cart moves in');
        cart.style.animation = 'cartMove 2s ease forwards'
    }


})();