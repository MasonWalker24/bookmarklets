var draggableObject = document.createElement("DIV");
draggableObject.style.backgroundColor = "yellow";
draggableObject.style.width = "15%";
draggableObject.style.height = "30%";
draggableObject.style.border = "2px solid black";
draggableObject.style.position = "absolute";



addButton.addEventListener("keydown", addNote, false);

function addNote(event)
{
    if(event.code == "ShiftRight")
    {
        document.body.appendChild(draggableObject);
    }
}
