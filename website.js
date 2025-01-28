'use strict'

(function() {
    window.addEventListener('load', init);
    let currentGuess = 1;

    function init() {
        document.getElementById('#submit').addEventListener('click', submitGuess());
    }

    function submitGuess() {
        let word = document.getElementById('#user-input').innerText;
        console.log('word: ' + word);
    }
})