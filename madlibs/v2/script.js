


(function(){
    'use strict';
    console.log('reading js');


    const madlibForm = document.querySelector('form');
    const madlibFinal = document.querySelector('#screen2 p');
    const formData = document.querySelectorAll('input[type=text]');
    const screen1 = document.querySelector('#screen1');
    const screen2 = document.querySelector('#screen2');


    // CLICKING SUBMIT TO PROCESS FORM DATA
    madlibForm.addEventListener('submit', function(event) {
        event.preventDefault();
        processFormData(formData);
    });


    // TRACKS INPUT VALUES AND EMPTY INPUTS
    function processFormData(formData) {
        const inputs = []; // user input words
        const emptyfields = []; // empty inputs
        let counter = 0; // detects amount of empty fields

        for (const wordInput of formData) {
            if (wordInput.value) { // if any inputs have any values then...
                inputs.push(wordInput.value); // put the value into the user input array
            } else {
                emptyfields.push(counter); // otherwise if no value, add it to the emptyfield array
            }
            counter++; // increases amount of empty fields
        }

        if (emptyfields.length > 0) { // if there are any empty fields then...
            formError(formData, emptyfields); // show errors depending on input values or empty fields
        } else { // if no empty fields then...
            makeMadlib(inputs); // make final madlib
            screen1.className = "screen hidden";
            screen2.className = "screen showing";
        }
    }


    // SHOWS ERRORS IF ANY EMPTY FIELDS
    function formError(formData, emptyfields) {
        const emptyId = formData[emptyfields[0]].id; // finds empty input through id

        alert(`Please fill out ${emptyId}`);
        document.querySelector(`#${emptyId}`).focus(); // highlights empty field
    }


    // CREATES MADLIBS STORY
    function makeMadlib(inputs) {

        const madlibStory = 
            `One day, while walking, you trip over a(n) <span>${inputs[0]}</span> and land face-first onto the ground. Suddenly, a(n) <span>${inputs[1]}</span> runs up and bites your <span>${inputs[2]}</span>. You feel a surge of power rush through you. Now, whenever you action, you can <span>${inputs[3]}</span>! You want to be known as <span>${inputs[4]}</span>-Man!

            But the city needs saving! The villain, villain name has a diabolical plan to <span>${inputs[5]}</span> every <span>${inputs[6]}</span> in the city. With the help of your <span>${inputs[3]}</span> powers, your trusty sidekick, <span>${inputs[7]}</span>, and your <span>${inputs[1]}</span> companion, you launch a(n) massive attack that sends villain name flying into (a) <span>${inputs[8]}</span>. You quickly use a <span>${inputs[9]}</span> to disable the villain's device causing it to <span>${inputs[10]}</span>. The day was saved!`;

        madlibFinal.innerHTML = madlibStory;

        document.querySelectorAll('span').style.color = '#FFE712';
        document.querySelectorAll('span').style.fontSize = '1.4em';

        for (const eachField of formData) {
            eachField.value = ''; // clear input field after madlib is created
        }
    }

    console.log('Tracked Inputs:', formData);
    formData.forEach(input => console.log(input.id, input.value));

})();