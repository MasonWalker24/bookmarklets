//adding the elements
const note = document.createElement("DIV");
const dragHeader = document.createElement("DIV");

//styling the elements

//styling the main sticky

note.style.backgroundColor = "yellow";
note.style.width = "8%";
note.style.height = "12%";
note.style.border = "2px solid black";
note.style.position = "absolute";
dragHeader.appendChild(note);

//styling the header

dragHeader.style.width = "10%";
dragHeader.style.height = "15%";


// adding the sticky note
document.addEventListener("keydown", addNote, false);
function addNote(event)
{
    if(event.code == "ShiftRight")
    {
        document.body.appendChild(dragHeader);
    }
}
