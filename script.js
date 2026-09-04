
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: Arial, sans-serif;

    background: linear-gradient(135deg, #ff9a9e, #fad0c4);

    overflow: hidden;
}

.card {
    width: 90%;
    max-width: 500px;

    padding: 45px 25px;

    text-align: center;

    background: white;

    border-radius: 25px;

    box-shadow: 0 15px 40px rgba(0,0,0,0.2);

    position: relative;
    z-index: 2;
}

.heart {
    font-size: 75px;

    animation: heartbeat 1.2s infinite;
}

h1 {
    color: #ff3b6b;

    font-size: 38px;

    margin: 15px 0;
}

p {
    color: #555;

    font-size: 18px;
}

.buttons {
    margin-top: 30px;

    display: flex;

    justify-content: center;

    gap: 18px;
}

button {
    border: none;

    padding: 14px 28px;

    border-radius: 30px;

    font-size: 18px;

    font-weight: bold;

    cursor: pointer;

    transition: 0.2s;
}

#yesBtn {
    background: #ff3b6b;

    color: white;
}

#noBtn {
    background: #eeeeee;

    color: #555;
}

button:hover {
    transform: scale(1.08);
}

.hidden {
    display: none;
}

.big-heart {
    font-size: 100px;

    animation: heartbeat 0.8s infinite;
}

.floating-heart {
    position: absolute;

    bottom: -50px;

    font-size: 25px;

    animation: floatUp 5s linear forwards;
}

@keyframes heartbeat {

    0%, 100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.15);
    }
}

@keyframes floatUp {

    0% {
        transform: translateY(0) rotate(0deg);

        opacity: 1;
    }

    100% {
        transform: translateY(-110vh) rotate(360deg);

        opacity: 0;
    }
}

@media (max-width: 500px) {

    h1 {
        font-size: 30px;
    }

    .buttons {
        flex-direction: column;

        align-items: center;
    }

    button {
        width: 180px;
    }
}
