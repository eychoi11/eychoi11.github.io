'use strict'

(function() {
    window.addEventListener('load', init);
    let currentGuess = 1;

    function init() {
        document.getElementById('#submit').addEventListener('click', submitGuess());
    }

    function submitGuess() {
        console.log('in submitGuess');
        let userInputElement = document.getElementById('#user-input')
        let word = userInputElement.innerText;
        console.log('word: ' + word);
        userInputElement.innerText = '';
    }
})