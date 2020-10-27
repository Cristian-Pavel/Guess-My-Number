'use strict';

// TODO:
/* 
    - DONE - selectarea in variabile sau obiect
    - DONE - schimbare text - romana
    - DONE - schimbare imagini basic - joc + castig
    - DONE - schimbare font
    - DONE - adaugare event listener ENTER la "Asta-i!"
    - DONE adaugare casuta de pop-up la castig (care va iesi prin esc)
    - mesaje diferite pentru 30 de level-uri

*/

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
    again: document.querySelector('.again'),
    fereastra: document.querySelector('.modal'),
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

            if (highscore < score) {
                highscore = score;
                selectii.highscore.textContent = highscore;
                functii.mesajScor(highscore);
            }
        }

        // Cand nu ghiceste
        else if (guess !== secretNumber) {
            // Cand a introdus un numar prea mare
            if (score > 1) {
                functii.messageText(
                    guess > secretNumber
                        ? `🤪 Prea mult, sefu !`
                        : `🤏Prea putin, nu fi zgarcit sefu !`
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
        selectii.guess.value = '';
        selectii.body.style.backgroundImage = "url('img/ghicitoare2.jpg')";
        selectii.number.style.width = '15rem';
    },

    mesajScor: function (record) {
        switch (record) {
            case 20: {
                this.popUp('barosn');
                break;
            }
        }
    },

    popUp: function () {
        const inchidePopup = function () {
            selectii.fereastra.classList.add('hidden');
        };
        selectii.fereastra.classList.remove('hidden');
        selectii.fereastra.addEventListener('click', inchidePopup);
    },
};

// selectii.number.textContent = secretNumber;

document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === 'click') functii.joaca();
});

selectii.check.addEventListener('click', functii.joaca);

selectii.again.addEventListener('click', functii.restart);
