// Floating emojis
const emojis = ["💖","💕","💗","💘","🌸","🦋"];

setInterval(() => {

    let emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];

    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.bottom = "-20px";
    emoji.style.animationDuration = (4 + Math.random()*3) + "s";

    document.body.appendChild(emoji);

    setTimeout(()=>{
        emoji.remove();
    },7000);

}, 400);
const text = "Happy Birthday, Lopa! 💕";
const typingElement = document.getElementById("typingText");

let index = 0;

function typeEffect(){
    if(index < text.length){
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80); // typing speed
    }
}

window.onload = typeEffect;


// Button function
function start(){
    alert("Let the celebration begin 💖🎉");
}
