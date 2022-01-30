"use strict";

// styling
const body_style = {
    margin: 0,
    padding: 0,
    fontSize: "16px",
    textAlign: "center",
    background: "#34495e",
};

const header_style = {
    color: "white",
};

const main_style = {
    height: "80vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

const svg_style = {
    fill: "transparent",
    stroke: "#ffffff",
    strokeWidth: "4px",
    strokeLinecap: "round",
};

const hangman_body_style = {
    display: "none",
};

const word_style = {
    marginTop: "50px",
};

const letter_style = {
    width: "15px",
    fontSize: "30px",
    marginRight: "15px",
    display: "inline-flex",
    borderBottom: "3px solid #2980b9",
};

const popup_box_style = {
    position: "fixed",
    display: "none",
};

const popup_style = {
    padding: "20px 40px",
    background: "#2980b9",
};

const play_btn_style = {
    border: 0,
    color: "2980b9",
    fontSize: "16px",
    marginTop: "20px",
    cursor: "pointer",
    background: "ffffff",
    padding: "12px 20px",
};

const notification_box_style = {
    bottom: "0",
    display: "none",
    color: "#ffffff",
    position: "fixed",
    padding: "15px 20px",
    borderRadius: "10px 10px 0 0",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    transition: "transform 0.3s ease-in-out",
};

// selecting HTML element
const html_body = document.querySelector("body");
const header = document.querySelector("header");
const main = document.querySelector("main");
const svg = document.querySelector(".figure-container");
const hangman_body = document.querySelectorAll(".hangman_body");
const word = document.querySelector(".word");

const wrong_letters_el = document.querySelector(".wrong_letters_el");
const popup_box = document.querySelector(".popup-box");
const popup = document.querySelector(".popup");
const message = document.querySelector(".message");
const play_btn = document.querySelector(".play-btn");
const notification_box = document.querySelector(".notification-box");

// assigning styling to element
Object.assign(html_body.style, body_style);
Object.assign(header.style, header_style);
Object.assign(main.style, main_style);
Object.assign(word.style, word_style);
Object.assign(svg.style, svg_style);

for (let i = 0; i < hangman_body.length; i++) {
    Object.assign(hangman_body[i].style, hangman_body_style);
}
Object.assign(popup_box.style, popup_box_style);
Object.assign(popup.style, popup_style);
Object.assign(play_btn.style, play_btn_style);
Object.assign(notification_box.style, notification_box_style);

// game logic
const random_words = ["apple", "banana", "cat", "dog"];
let secret_word = random_words[Math.floor(Math.random() * random_words.length)];
const correct_letters = [];
const wrong_letters = [];

// showing correct letter of words
function displayCorrectLetter() {
    word.innerHTML = `${secret_word
        .split("")
        .map(
            (letter) =>
                `<div class="letter">${
                    correct_letters.includes(letter) ? letter : "&nbsp;"
                }</div>`
        )
        .join("")}`;

    const letters = document.querySelectorAll(".letter");
    for (let i = 0; i < letters.length; i++) {
        Object.assign(letters[i].style, letter_style);
    }

    const inner_word = word.innerText.replace(/\n/g, "");
    if (inner_word === secret_word) {
        message.innerHTML = "🎉 Congratulation! you won the game";
        popup_box.style.display = "flex";
    }
}

// when wrong input is pressed
function updateWrongLetters() {
    wrong_letters_el.innerHTML = `
    ${wrong_letters.length > 0 ? "<p>Wrong Input: </p>" : ""}
    ${wrong_letters.map((letter) => `<span>${letter}</span>`)}
    `;

    for (let i = 0; i < hangman_body.length; i++) {
        const err_length = wrong_letters.length;

        if (i < err_length) {
            hangman_body[i].style.display = "block";
        } else {
            hangman_body[i].style.body = "none";
        }

        if (err_length === Number(hangman_body.length)) {
            message.innerText = "😱 Sorry, you lost the game";
            popup_box.style.display = "flex";
        }
    }
}

// show notification
function showNotification() {
    setTimeout(function () {
        notification_box.style.display = "flex";
    }, 500);
}

// when key is pressed on DOM
window.addEventListener("keydown", function (event) {
    notification_box.style.display = "none";
    if (/[a-z]/.test(event.key) && event.key.length === 1) {
        const input_letter = event.key;
        if (secret_word.includes(input_letter)) {
            if (!correct_letters.includes(input_letter)) {
                correct_letters.push(input_letter);
                displayCorrectLetter();
            } else {
                showNotification();
            }
        } else {
            if (!wrong_letters.includes(input_letter)) {
                wrong_letters.push(input_letter);
				updateWrongLetters();
            } else {
                showNotification();
            }
        }
    }
});

// play again
play_btn.addEventListener("click", function () {
    correct_letters.splice(0);
    wrong_letters.splice(0);
    secret_word = random_words[Math.floor(Math.random() * random_words.length)];
    displayCorrectLetter();
    updateWrongLetters();
    popup_box.style.display = "none";
    for (let i = 0; i < hangman_body.length; i++) {
        hangman_body[i].style.display = "none";
    }
});

displayCorrectLetter();