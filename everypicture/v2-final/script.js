


(function(){
    'use strict';
    console.log('reading js');


    const bookPage = document.querySelector('.cover');
    const nextButton = document.querySelector('#next');
    const prevButton = document.querySelector('#previous');
    const nextText = document.querySelector('#nexttext');
    const prevText = document.querySelector('#previoustext');
    const allPages = document.querySelectorAll('.page-content');

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



    // FLIPPING PAGES WITH ARROWS

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



    // UPDATE PAGE CONTENT

    function updatePage() {
        // initially hides all page content
        for (let i = 0; i < allPages.length; i++) {
            allPages[i].className = 'page-content hidden';
        }

        // detects page # in array and shows page content
        if (currentPage > 0 && currentPage <= allPages.length) {
            const currentPageContent = document.querySelector(`#page${currentPage}`);
            if (currentPageContent) {
                currentPageContent.className = 'page-content showing';
            } 
        }

        // change page svg on button click
        bookPage.src = pages[currentPage];
        console.log(`#page${currentPage}`)

        // determines style / position based on which page
        if (currentPage === 0) {
            bookPage.className = 'cover';
        } else if (currentPage === pages.length - 1) {
            bookPage.className = 'back';
        } else {
            bookPage.className = 'page';
        }

        // hides arrows on first and last page
        if (currentPage === 0) {
            // hides prev arrow on cover page
            prevButton.className = 'arrow hidden';
            prevText.className = 'previoustext hidden'
        } else {
            prevButton.className = 'arrow showing';
            prevText.className = 'previoustext'
        }

        if (currentPage === pages.length - 1) {
            // hides next arrow on last page
            nextButton.className = 'arrow hidden';
            nextText.className = 'nexttext hidden'
        } else {
            nextButton.className = 'arrow showing';
            nextText.className = 'nexttext'
        }
    }

    updatePage();



    // SIDE TAB (KEY WORDS)

    const sideTab = document.querySelector('#side-tab');
    const sidePanel = document.querySelector('#side-panel');

    // open / close panel by clicking tab 
    sideTab.addEventListener('click', function(event) {
        event.preventDefault()

        if (sidePanel.className === 'open') {
            sideTab.className = 'close';
            sidePanel.className = 'close';
        } else {
            sideTab.className = 'open';
            sidePanel.className = 'open';
        }
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