const draggableObject = document.createElement("DIV");
draggableObject.style.backgroundColor = "yellow";
draggableObject.style.width = "15%";
draggableObject.style.height = "30%";
draggableObject.style.border = "2px solid black";
draggableObject.style.position = "absolute";

const addButton = document.createElement("BUTTON");
addButton.style.width = "6%";
addButton.style.height = "7.5%";
addButton.style.position = "absolute";
addButton.style.left = "94%";
addButton.style.top = "92.5%";
addButton.style.backgroundColor = "blue";
document.body.appendChild(addButton);

addButton.addEventListener("click", addNote, false);

function addNote(event)
{
        document.body.appendChild(draggableObject);
}
