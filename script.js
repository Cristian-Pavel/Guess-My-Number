'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

let selectii = {
    number: document.querySelector('.number'),
    check: document.querySelector('.check'),
    body: document.querySelector('body'),
    message: document.querySelector('.message'),
    highscore: document.querySelector('.highscore'),
    guess: document.querySelector('.guess'),
    score: document.querySelector('.score'),
    titluScor: document.querySelector('.label-score'),
    again: document.querySelector('.again'),
};

let functii = {
    joaca: function () {
        const guess = Number(selectii.guess.value);
        console.log(guess, typeof guess);

        //Cand nu se introduce nimic
        if (!guess) {
            functii.messageText('😠 Pai de ce nu pui numar?! ');

            // Cand a ghicit corect
        } else if (guess === secretNumber) {
            functii.messageText("👍 Correct, patronu' !");
            selectii.body.style.backgroundImage = "url('img/haurentiu2.png')";
            selectii.body.style.backgroundSize = 'cover';
            selectii.number.textContent = secretNumber;

            // if (highscore < score) {
            highscore = 21 - score;
            selectii.highscore.textContent = highscore;
            selectii.titluScor.style = 'display: none';
            // }
        }

        // Cand nu ghiceste
        else if (guess !== secretNumber) {
            // Cand a introdus un numar prea mare
            if (score > 1) {
                functii.messageText(
                    guess > secretNumber
                        ? `🤪 Prea mult, sefu' !`
                        : `🤏Prea putin, nu fi zgarcit sefu' !`
                );
                score--;
                selectii.score.textContent = score;
            } else {
                functii.messageText(`😟 No, ai pierdut. 
                Amu? Ce facem? Mai jucam?!`);
                selectii.score.textContent = 0;
            }
        }
    },

    messageText: function (text) {
        selectii.message.textContent = text;
    },

    restart: function () {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20 + 1);
        selectii.message.textContent = 'Incearca sa ghicesti...';
        selectii.number.textContent = '?';
        selectii.score.textContent = score;
        selectii.titluScor.style = 'display: block';
        selectii.guess.value = '';
        selectii.body.style.backgroundImage = "url('img/ghicitoare2.jpg')";
        selectii.number.style.width = '15rem';
    },
};

// Doar pentru a verifica in dezvoltarea aplicatiei
// selectii.number.textContent = secretNumber;

document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') functii.joaca();
});

selectii.check.addEventListener('click', functii.joaca);

selectii.again.addEventListener('click', functii.restart);
