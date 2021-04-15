const headlines = document.getElementsByTagName("h1");
for (const headline of headlines) {
    headline.addEventListener("mouseover", lightUp, false);
    headline.addEventListener("mouseout", unLightUp, false);
}

function lightUp(event) {
  event.target.style.textShadow = "2px 2px 5px blue";
}
function unLightUp(event)
{
 event.target.style.textShadow = "0px 0px 0px";   
}
