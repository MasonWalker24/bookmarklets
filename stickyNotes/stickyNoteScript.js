var draggableObject = document.createElement("DIV");
draggableObject.style.backgroundColor = "yellow";
draggableObject.style.width = "15%";
draggableObject.style.height = "30%";
draggableObject.style.border = "2px solid black";
draggableObject.style.position = "absolute";


document.addEventListener("keydown", addNote, false);

function addNote(event)
{
  if(event.keycode == 13)
  {
    //document.appendChild(draggableObject);
    alert("test");
  }
}