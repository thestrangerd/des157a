


(function(){
    'use strict';
    console.log('reading js');


    const image = document.querySelector('img');

    image.addEventListener('mouseover', function(event) {
        event.preventDefault();
        image.style.transofmr = 'scale(1.5)';
    });

    image.addEventListener('mouseleave', function(event) {
        event.preventDefault();
        image.style.transofmr = 'scale(1)';
    });
    


})();