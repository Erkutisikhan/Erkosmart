function startRecording() {
  const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.start();

  recognition.onresult = function(event) {
    const userSpeech = event.results[0][0].transcript;
    document.getElementById("response").innerText = "Thinking...";

    fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer YOUR_OPENAI_API_KEY"
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [{ role: "user", content: userSpeech }]
      })
    })
    .then(res => res.json())
    .then(data => {
      const reply = data.choices[0].message.content;
      document.getElementById("response").innerText = reply;

      const utterance = new SpeechSynthesisUtterance(reply);
      speechSynthesis.speak(utterance);
    });
  };
}