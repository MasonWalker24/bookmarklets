var button = document.createElement("BUTTON");
var isConsole = "false";
var button2 = document.createElement("BUTTON");
var container = document.createElement("DIV");
var input = document.createElement("H2");
var console = document.createElement("H2");

button.style.position = "fixed";
button.style.width = "10%";
button.style.height = "12%";
button.style.left = "90%";
button.style.border = "2px solid black";
button.style.background = "white";
button.style.fontSize = "1.7vw";
button.style.zIndex = "200";
button.style.top = "75%";

input.style.position = "absolute";
input.style.width = "80%";
inputAtt = document.createAttribute("contenteditable");
inputAtt.value = "true";
input.setAttributeNode(inputAtt);
input.style.height = "7%"
input.style.top = "65%";
input.style.left = "5%";
input.style.border = "2px solid black";
input.style.zIndex = "101";

container.style.width = "100%";
container.style.height = "40%";
container.style.position = "fixed";
container.style.top = "60%";
container.style.backgroundColor = "blue"
container.style.opacity = ".7";
container.style.zIndex = "100";
container.style.left = "0";

button2.style.position = "fixed";
button2.style.width = "10%";
button2.style.height = "12%";
button2.style.left = "90%";
button2.style.border = "2px solid black";
button2.style.background = "white";
button2.style.fontSize = "1.7vw";
button2.style.zIndex = "200";
button2.addEventListener("click", openConsole, false);

console.style.position = "fixed";
console.style.background = "white";
console.style.border = "2px solid black";
console.style.width = "80%";
console.style.height = "10%";
console.style.top = "75%";
console.style.left = "5%";
console.style.display = "none";

button2.innerHTML = "Open Console";
var consoleAtt = document.createAttribute("contenteditable");
consoleAtt.value = "true";
console.setAttributeNode(consoleAtt);
document.body.appendChild(button2);
document.body.appendChild(console);



//console functions and variables

function openConsole()
{
    if(isConsole == "false")
    {
    console.style.display = "block";
    button2.innerHTML = "Close Console";
        isConsole = "true";
    } else
    {
        console.style.display = "none";
        console.innerHTML = "";
        button2.innerHTML = "Open Console";
        isConsole = "false";
    }
}
//add all h1 elements
const headlines = document.getElementsByTagName("h1");
for (const headline of headlines) {
    headline.addEventListener("mouseover", lightUp, false);
    headline.addEventListener("mouseout", unLightUp, false);
    headline.addEventListener("click", clickh1, false);
}

function lightUp(event) {
  event.target.style.boxShadow = "0px 0px 5px blue";
}
function unLightUp(event)
{
 event.target.style.boxShadow = "0px 0px 0px";   
}

//add all h2 elements

const headlines2 = document.getElementsByTagName("h2");
for (const headline2 of headlines2) {
    headline2.addEventListener("mouseover", lightUp, false);
    headline2.addEventListener("mouseout", unLightUp, false);
   // headline2.addEventListenrer("click", clickh2, false);
}
//add all h3 elements

const headlines3 = document.getElementsByTagName("h3");
for (const headline3 of headlines3) {
    headline3.addEventListener("mouseover", lightUp, false);
    headline3.addEventListener("mouseout", unLightUp, false);
    //headline3.addEventListener("click", clickh3, false);
}

//add all h4 elements

const headlines4 = document.getElementsByTagName("h4");
for (const headline4 of headlines4) {
    headline4.addEventListener("mouseover", lightUp, false);
    headline4.addEventListener("mouseout", unLightUp, false);
   // headline4.addEventListenr("click", clickh4, false);
}


//add all P elements

const paragraphs = document.getElementsByTagName("p");
for (const paragraph of paragraphs) {
    paragraph.addEventListener("mouseover", lightUp, false);
    paragraph.addEventListener("mouseout", unLightUp, false);
   // paragraph.addEventListener("click", clickp, false);
}

//add all A elements

const links = document.getElementsByTagName("a");
for (const link of links) {
    link.addEventListener("mouseover", lightUp, false);
    link.addEventListener("mouseout", unLightUp, false);
    //link.addEventListener("click", clicka, false);
}


//add all img elements

const images = document.getElementsByTagName("img");
for (const image of images) {
    image.addEventListener("mouseover", lightUp, false);
    image.addEventListener("mouseout", unLightUp, false);
   // image.addEventListener("click", clickimg, false);
}

//add all div elements

const divs = document.getElementsByTagName("div");
for (const div of divs) {
    div.addEventListener("mouseover", lightUp, false);
    div.addEventListener("mouseout", unLightUp, false);
    //div.addEventListener("click", clickdiv, false);
}


// the start of all the rest of the tag changing and getting.
var h1;
var h1parent;
var h1value;
var newparent;
function clickh1(event)
{
    var h1parent = event.target.parentNode;
    newparent = document.createElement("DIV");
    h1 = event.target;
    //var h1text = h1.innerHTML;
    h1parent.replaceChild(newparent, h1);
    newparent.appendChild(h1);
    h1value = newparent.innerHTML;
    h1value.toString();
    h1value.replace(/</gi, "m");
    input.innerText = h1value;
    document.body.appendChild(input);
    document.body.appendChild(button);
    document.body.appendChild(container);
    button.addEventListener("click", seth1, false);
}
function seth1()
{
    //alert("test");
    var h1settext = input.textContent;
    newparent.innerHTML = h1settext;
    button.remove();
    container.remove();
    input.innerHTML = "";
    input.remove();
}

