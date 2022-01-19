javascript:
var delay = prompt("delay(milliseconds)");
const elementToClick;
const elements = document.body.children;
for(const element of elements)
{
  element.addEventListener("click", setclick, false);
}

function setclick(event)
{
  //elementToClick = event.target;
  alert("yes");
}
