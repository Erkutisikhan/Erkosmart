const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", () => {
    const input = userInput.value.trim();
    if (input === "") return;

    addMessage("Sen", input);
    getBotResponse(input);
    userInput.value = "";
});

function addMessage(sender, message) {
    const msg = document.createElement("p");
    msg.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatBox.appendChild(msg);
}

function getBotResponse(input) {
    let response = "Anlamadım, tekrar eder misin?";

    input = input.toLowerCase();

    if (input.includes("merhaba")) {
        response = "Merhaba! Sana nasıl yardımcı olabilirim?";
    } else if (input.includes("hava")) {
        response = "Bugün hava çok güzel gibi görünüyor!";
    } else if (input.includes("saat")) {
        response = `Şu an saat: ${new Date().toLocaleTimeString()}`;
    } else if (input.includes("nasılsın")) {
        response = "Ben bir yapay zekayım, ama iyiyim diyebilirim!";
    }

    addMessage("Asistan", response);
}