javascript:
var delay = prompt("delay(milliseconds)");
var elementToClick;
var elements = document.body.children;
for(const element of elements)
{
  element.addEventListener("click", setclick, false);
}

function setclick(event)
{
  //elementToClick = event.target;
  alert("yes");
}
