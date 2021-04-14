javascript:
var att = document.createAttribute("contenteditable"); 
var button = document.createElement("BUTTON");
button.style.position = "fixed";
button.style.width = "10%";
button.style.height = "15%";
button.style.backgroundColor = "white";
button.style.border = "2px solid black";
button.style.top = "85%";
button.style.left = "90%";
button.style.zIndex = "100";
button.style.fontSize = "1.8vw";
button.innerHTML = "Toggle";
button.addEventListener('click', function() {
    if(att.value == "true")
    {
    att.value = "false";
    } else 
    {
     att.value = "true";   
    }
}, false);

if(att.value == "true")
{
att.value = "false";
}
else
{
  att.value = "true";
}

document.body.setAttributeNode(att);
document.body.appendChild(button);
