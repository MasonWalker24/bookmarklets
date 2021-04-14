javascript:
var button = document.createElement("BUTTON");
var button2 = document.createElement("BUTTON");
button.style.position = "fixed";
button.style.width = "10%";
button.style.height = "15%";
button.style.backgroundColor = "white";
button.style.border = "2px solid black";
button.style.top = "85%";
button.style.left = "90%";
button.style.zIndex = "100";
button.style.fontSize = "1.8vw";
button.innerHTML = "Give Cookies";
button.addEventListener('click', function() {
var amount = prompt("how many cookies do you want");
amount = parseInt(amount);
Game.cookies = amount;
}, false);
button2.style.position = "fixed";
button2.style.width = "10%";
button2.style.height = "15%";
button2.style.backgroundColor = "white";
button2.style.border = "2px solid black";
button2.style.top = "70%";
button2.style.left = "90%";
button2.style.zIndex = "100";
button2.style.fontSize = "1.8vw";
button2.innerHTML = "Turn Off";
button2.addEventListener('click', function() {
    button.remove();
    button2.remove();
}, false);
document.body.appendChild(button);
document.body.appendChild(button2);
