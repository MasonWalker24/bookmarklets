//adding the elements
const note = document.createElement("DIV");
const dragHeader = document.createElement("DIV");
var att = document.createAttribute("contenteditable"); 
att.value = "true";

//styling the elements

//styling the main sticky

note.style.backgroundColor = "yellow";
note.style.width = "8%";
note.style.height = "12%";
note.style.border = "2px solid black";
note.style.position = "fixed";
note.setAttributeNode(att);

//styling the header

dragHeader.style.width = "8%";
dragHeader.style.height = "3%";
dragHeader.style.position = "absolute";
dragHeader.appendChild(note);


// adding the sticky note
document.addEventListener("keydown", addNote, false);
function addNote(event)
{
    if(event.code == "ShiftRight")
    {
        document.body.appendChild(dragHeader);
    }
}
