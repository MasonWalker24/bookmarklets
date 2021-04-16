var button = document.createElement("BUTTON");
var container = document.createElement("DIV");
var input = document.createElement("DIV");
input.style.position = "absolute";
input.style.width = "80%";
inputAtt = document.createAttribute("contenteditable");
inputAtt.value = "true";
input.setAttributeNode(inputAtt);
input.style.height = "30%"
input.style.top = "65%";
input.style.left = "5%";
input.style.border = "2px solid black";
container.style.width = "100%";
container.style.height = "40%";
container.style.position = "absolute";
container.style.top = "60%";
container.style.backgroundColor = "blue"
container.style.opacity = ".7";
container.style.zIndex = "100";
input.style.zIndex = "101";
container.style.left = "0";



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
function clickh1(event)
{
    document.body.appendChild(button);
    document.body.appendChild(input);
    document.body.appendChild(container);
    h1parent = event.target.parentElement;
    button.addEventListener("click", seth1, false);
    h1 = event.target;
    var h1text = h1.innerHTML;
    var h1class = h1.getElement("class");
    input.value = '<h1 class="' + h1class + '"' + ">" + h1text + "</h1>";
}
function seth1()
{
    var h1text = input.textContent;
    h1.innerHTML = h1text;
    button.remove();
    container.remove();
    input.remove();
}

