//adding the elements
const note = document.createElement("DIV");
const dragHeader = document.createElement("DIV");

//styling the elements

//styling the main sticky

note.style.backgroundColor = "yellow";
note.style.width = "100%";
note.style.height = "312%";
note.style.border = "2px solid black";
note.style.position = "absolute";
dragHeader.appendChild(note);

//styling the header

dragHeader.style.width = "5%";
dragHeader.style.height = "2%";


// adding the sticky note
document.addEventListener("keydown", addNote, false);
function addNote(event)
{
    if(event.code == "ShiftRight")
    {
        document.body.appendChild(dragHeader);
    }
}
