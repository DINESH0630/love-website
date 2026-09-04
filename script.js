const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const message = document.getElementById("message");

const questionScreen =
    document.getElementById("questionScreen");

const yesScreen =
    document.getElementById("yesScreen");

const cartoon =
    document.getElementById("cartoon");


let noCount = 0;

const messages = [

    "Are you sure? 🙃",

    "Really? 😒",

    "The bunny is still waiting... 🐰",

    "Hmm... maybe think about it? 💕",

    "The YES button is getting excited! 🧡",

    "Okay okay... I'll wait patiently 🥺",

    "One more thought? 🌸",

    "No pressure — choose whatever feels right 😭",

    "I hope this time you should accept 🥹",

    "plz 😭"

];


const reactions = [

    "🙃",

    "😗",

    "🥲",

    "😑",

    "😮‍💨",

    "😟",

    "☹️",

    "🥺",

    "😢"

    "😭"

];


// NO BUTTON

noBtn.addEventListener("click", function () {

    noCount++;

    const index =
        Math.min(noCount - 1, messages.length - 1);

    message.textContent =
        messages[index] + " " + reactions[index];


    // Make YES grow gradually

    const newScale =
        Math.min(1 + noCount * 0.18, 2.5);

    yesBtn.style.transform =
        `scale(${newScale})`;


    // Change bunny reaction

    cartoon.querySelector(".face").textContent =
        reactions[index];


    // Little bounce

    noBtn.animate(
        [
            { transform: "scale(1)" },
            { transform: "scale(0.9)" },
            { transform: "scale(1)" }
        ],
        {
            duration: 300
        }
    );

});


// YES BUTTON

yesBtn.addEventListener("click", function () {

    questionScreen.classList.add("hidden");

    cartoon.classList.add("hidden");

    yesScreen.classList.remove("hidden");

    createHearts();

});


// Floating hearts

function createHearts() {

    const container =
        document.querySelector(".floating-hearts");

    for (let i = 0; i < 50; i++) {

        const heart =
            document.createElement("div");

        heart.className =
            "floating-heart";

        const emojis = [
            "❤️",
            "💕",
            "💖",
            "💗",
            "💓",
            "✨"
        ];

        heart.textContent =
            emojis[
                Math.floor(
                    Math.random() * emojis.length
                )
            ];

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.animationDuration =
            (3 + Math.random() * 4) + "s";

        heart.style.animationDelay =
            Math.random() * 2 + "s";

        container.appendChild(heart);
    }
}
