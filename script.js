
const yesBtn = document.getElementById("yesBtn");

const noBtn = document.getElementById("noBtn");

const questionScreen =
    document.getElementById("questionScreen");

const yesScreen =
    document.getElementById("yesScreen");

const message =
    document.getElementById("message");


const noMessages = [

    "Are you sure? 🥺",

    "Really? 😭",

    "My heart just did a tiny oof 💔",

    "Okay... I respect your answer 😅",

    "Maybe you will change your mind? ❤️"

];

let noCount = 0;


// When she clicks NO
noBtn.addEventListener("click", function () {

    message.textContent =
        noMessages[noCount % noMessages.length];

    noCount++;

});


// When she clicks YES
yesBtn.addEventListener("click", function () {

    questionScreen.classList.add("hidden");

    yesScreen.classList.remove("hidden");

    createHearts();

});


// Create floating hearts
function createHearts() {

    const container =
        document.querySelector(".hearts");

    for (let i = 0; i < 40; i++) {

        const heart =
            document.createElement("div");

        heart.classList.add("floating-heart");

        heart.textContent =
            ["❤️", "💕", "💖", "💗", "💓"]
            [Math.floor(Math.random() * 5)];

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.animationDuration =
            (3 + Math.random() * 4) + "s";

        heart.style.animationDelay =
            Math.random() * 2 + "s";

        container.appendChild(heart);
    }
}
