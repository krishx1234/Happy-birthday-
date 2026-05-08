function createEmoji() {
  const emoji = document.createElement("div");
  emoji.innerText = "❤️";

  emoji.style.position = "absolute";
  emoji.style.left = Math.random() * 100 + "vw";  // FULL WIDTH
  emoji.style.top = Math.random() * 100 + "vh";   // FULL HEIGHT
  emoji.style.fontSize = "20px";

  document.querySelector(".emoji-container").appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 3000);
}

setInterval(createEmoji, 200);