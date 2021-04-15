//add all h1 elements
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

//add all h2 elements

const headlines2 = document.getElementsByTagName("h2");
for (const headline2 of headlines2) {
    headline2.addEventListener("mouseover", lightUp, false);
    headline2.addEventListener("mouseout", unLightUp, false);
}

function lightUp(event) {
  event.target.style.textShadow = "2px 2px 5px blue";
}
function unLightUp(event)
{
 event.target.style.textShadow = "0px 0px 0px";   
}
