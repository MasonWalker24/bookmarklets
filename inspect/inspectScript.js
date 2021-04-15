const headlines = document.getElementsByTagName("h1");
for (const headline of headlines) {
    headline.addEventListener("mouseover", lightUp, false);
}

function lightUp(event) {
  event.target.style.textShadow = "2px 2px 5px blue";
}
