'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
// document.querySelector('.number').textContent = secretNumber;
const messageText = function (text) {
    document.querySelector('.message').textContent = text;
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //When there is no input
    if (!guess) {
        messageText('⛔ No number! ');

        // When the guess is correct
    } else if (guess === secretNumber) {
        messageText('🎉 Correct!');
        document.querySelector('body').style.backgroundImage =
            "url('bkg-win2.jpg')";
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        if (highscore < score) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    // When the player is wrong
    else if (guess !== secretNumber) {
        // When the guess is too high
        if (score > 1) {
            messageText(guess > secretNumber ? `Too high!` : `Too low!`);
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // prettier-ignore
            messageText(`😟 You've lost the game`);
            document.querySelector('.score').textContent = 0;
        }
    }
});

let restart = function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundImage =
        "url('bkg-play2.jpg')";
    document.querySelector('.number').style.width = '15rem';
};
document.querySelector('.again').addEventListener('click', restart);
