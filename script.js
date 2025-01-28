'use strict';

(function() {
    window.addEventListener('load', init);
    document.addEventListener("DOMContentLoaded", function(event) { 
        alert('Hey')
      });
    let currentGuess = 1;
    window.onload = (event) => {
        console.log('test')
    };
    function init() {
        console.log('in init');
        document.getElementById('#submit').addEventListener('click', submitGuess);
    }

    function submitGuess() {
        console.log('in submitGuess');
        let userInputElement = document.getElementById('#user-input')
        let word = userInputElement.innerText;
        console.log('word: ' + word);
        userInputElement.innerText = '';
    }

    function test() {
        console.log('test')
    }
})