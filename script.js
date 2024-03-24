const randomText = [
    "Welcum",
    "adict",
    "to",
    "your",
    "page",
    "AAAAAAAAAAAAAAAA",
];

const welcomeText = document.getElementById("welcomeText");

setInterval(() => {
    welcomeText.innerHTML = getRandomText();
}, 3000);

function getRandomText() {
    return randomText[Math.floor(Math.random() * randomText.length)];
}
