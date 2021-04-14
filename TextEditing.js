javascript:
var att = document.createAttribute("contenteditable"); 
if(att.value == "true")
{
att.value = "false";
}
else
{
  att.value = "true";
}
document.body.setAttributeNode(att);
