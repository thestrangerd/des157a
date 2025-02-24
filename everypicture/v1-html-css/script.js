


(function(){
    'use strict';
    console.log('reading js');


    // FLIPPING PAGES WITH ARROWS

    const bookPage = document.querySelector('.cover');
    const nextButton = document.querySelector('#next');
    const prevButton = document.querySelector('#previous');
    const nextText = document.querySelector('#nexttext');
    const prevText = document.querySelector('#previoustext');
    const pageContent = document.querySelectorAll('#page-content');

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
        // on button click, increase img in array
        if (currentPage < pages.length - 1) {
            currentPage++;
            updatePage();
        }
    }

    function previousPage() {
        // on button click, decrease img in array
        if (currentPage > 0) {
            currentPage--;
            updatePage();
        }
    }

    function updatePage() {
        // change page svg on button click
        bookPage.src = pages[currentPage];

        for (let i = 1; i < 5; i++) {
            const page = document.querySelector('page' + i);
            if (page) {
                pages[i].className = 'page-content';
            }
        }

        // detects page # in array and shows page content
        const currentPageContent = document.querySelector('#page' + currentPage);
        if (currentPageContent) {
            currentPageContent.className = 'page-content showing';
        } 

        // determines style / position based on which page
        if (currentPage === 0) {
            bookPage.className = 'cover';
        } else if (currentPage === pages.length - 1) {
            bookPage.className = 'back';
        } else {
            bookPage.className = 'page';
        }

        // hides arrows on first and last page
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



    // SIDE TAB (KEY WORDS)

    const sideTab = document.querySelector('#side-tab');
    const sidePanel = document.querySelector('#side-panel');
    const closeBtn = document.querySelector('.close-btn');

    // open panel by clicking tab or tab p
    sideTab.addEventListener('click', function(event) {
        event.preventDefault()
        sideTab.className = 'open';
        sidePanel.className = 'open';
    }); 

    // closes tab with escape key
    document.addEventListener('keydown', function(event) {
        event.preventDefault();
        if (event.key === 'Escape') {
            sideTab.className = 'close';
            sidePanel.className = 'close';
        }
    });

})();