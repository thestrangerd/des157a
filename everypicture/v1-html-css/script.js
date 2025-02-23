


(function(){
    'use strict';
    console.log('reading js');


    // FLIPPING PAGES WITH ARROWS

    const bookPage = document.querySelector('.cover');
    const nextButton = document.querySelector('#next');
    const prevButton = document.querySelector('#previous');
    const nextText = document.querySelector('#nexttext');
    const prevText = document.querySelector('#previoustext');

    nextButton.addEventListener('click', nextPage);
    prevButton.addEventListener('click', previousPage);
    let currentPage = 0;

    const pages = [
        'images/cover.svg',
        'images/page1.svg',
        'images/page2.svg',
        'images/page3.svg',
        'images/page4.svg',
        'images/page5.svg',
        'images/back-cover.svg'
    ]

    function nextPage() {
        // ON BUTTON CLICK, INCREASE IMG IN ARRAY
        console.log('next button clicked');
        if (currentPage < pages.length - 1) {
            currentPage++;
            updatePage();
        }
    }

    function previousPage() {
        // ON BUTTON CLICK, DECREASE IMG IN ARRAY
        console.log('last button clicked');
        if (currentPage > 0) {
            currentPage--;
            updatePage();
        }
    }

    function updatePage() {
        // CHANGES PAGE SVG ON BUTTON CLICK
        bookPage.src = pages[currentPage];

        if (currentPage === 0) {
            bookPage.className = 'cover';
        } else if (currentPage === pages.length - 1) {
            bookPage.className = 'back';
        } else {
            bookPage.className = 'page';
        }

        // HIDES ARROWS ON FIRST AND LAST PAGE
        if (currentPage === pages.length - 1) {
            nextButton.className = 'arrow hidden';
            nextText.className = 'nexttext hidden'
        } else {
            nextButton.className = 'arrow showing';
            nextText.className = 'nexttext'
        }

        if (currentPage === 0) {
            prevButton.className = 'arrow hidden';
            prevText.className = 'previoustext hidden'
        } else {
            prevButton.className = 'arrow showing';
            prevText.className = 'previoustext'
        }
    }

    updatePage();

})();