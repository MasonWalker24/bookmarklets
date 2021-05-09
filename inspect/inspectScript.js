var changebutton = document.createElement("BUTTON");
var container = document.createElement("DIV");
var input = document.createElement("H2");
var consolebutton = document.createElement("BUTTON");
var console = document.createElement("H2");
var overlay = document.createElement("DIV");

changebutton.style.position = "fixed";
changebutton.style.width = "10%";
changebutton.style.height = "7%";
changebutton.style.left = "88%";
changebutton.style.border = "2px solid black";
changebutton.style.background = "white";
changebutton.style.fontSize = "1.7vw";
changebutton.style.zIndex = "200";
changebutton.style.top = "86.5%";

consolebutton.style.position = "fixed";
consolebutton.style.width = "12%";
consolebutton.style.height = "10%";
consolebutton.style.left = "88%";
consolebutton.style.border = "2px solid black";
consolebutton.style.background = "white";
consolebutton.style.fontSize = "1.7vw";
consolebutton.style.zIndex = "200";
consolebutton.style.top = "46.5%";
consolebutton.innerHTML = "Open Console";


input.style.position = "fixed";
input.style.width = "80%";
inputAtt = document.createAttribute("contenteditable");
inputAtt.value = "true";
input.setAttributeNode(inputAtt);
input.style.height = "7%";
input.style.top = "83.5%";
input.style.left = "5%";
input.style.border = "2px solid black";
input.style.zIndex = "101";
input.style.color = "white";

console.style.position = "fixed";
console.style.width = "80%";
consoleAtt = document.createAttribute("contenteditable");
consoleAtt.value = "true";
console.setAttributeNode(consoleAtt);
console.style.height = "7%";
console.style.top = "83.5%";
console.style.left = "5%";
console.style.border = "none";
console.style.zIndex = "101";
console.style.backgroundColor = "white";

container.style.width = "100%";
container.style.height = "20%";
container.style.position = "fixed";
container.style.top = "80%";
container.style.backgroundColor = "blue";
container.style.opacity = ".7";
container.style.zIndex = "100";
container.style.left = "0";


consolebutton.addEventListener("click", changeconsole, false);

//console functions and variables
var isConsole = false;
function changeconsole()
{
   if(isConsole == false)
   {
      document.addEventListener("keydown", execute, false);
      document.body.appendChild(console);
      document.body.appendChild(container);
      consolebutton.innerHTML = "Close Console";
      isConsole = true;
   }
   else
   {
      console.innerHTML = "";
      console.remove();
      container.remove();
      isConsole = false;
      consolebutton.innerHTML = "Open Console";
   }
}

function execute(event)
{
   if(event.keyCode == 13)
   {
      code = console.innerHTML;
      console.remove();
      container.remove();
      isConsole = false;
      consolebutton.innerHTML = "Open Console";
      eval(code);
   }
}

var target;

//add all h1 elements
const headlines = document.getElementsByTagName("h1");
for (const headline of headlines) {
    headline.addEventListener("mouseover", lightUp, false);
    headline.addEventListener("mouseout", unLightUp, false);
    headline.addEventListener("click", clickh1, false);
}

function lightUp(event) {
  //event.target.style.boxShadow = "0px 0px 5px blue";
   target = event.target;
   var rect = target.getBoundingClientRect();
   var width = rect.width + 5;
   var height = rect.height - 2;
   var left = rect.left - 2.5;
   var top = rect.top;
   overlay.style.position = target.style.position;
   overlay.style.width = width;
   overlay.style.height = height;
   overlay.style.left = left;
   overlay.style.top = top;
   overlay.style.zIndex = "102";
   overlay.style.backgroundColor = "orange";
   overlay.addEventListener("click", clickelement, false);
   document.body.appendChild(overlay);
}
function unLightUp(event)
{
 //event.target.style.boxShadow = "0px 0px 0px";  
   overlay.remove();
}

function setelement()
{
    //alert("test");
    var elementsettext = input.textContent;
    newparentelement.innerHTML = elementsettext;
    newparentelement.addEventListener("mouseover", lightUp, false);
    newparentelement.addEventListener("mouseout", unLightUp, false);
    newparentelement.addEventListener("click", clickelement, false);
    changebutton.remove();
    container.remove();
    input.innerHTML = "";
    input.remove();
   changebutton.removeEventListener("click", setelement, false);
}


function clickelement(event)
{
   alert("hi");
    //var elementparent = target.parentNode;
    //newparentelement = document.createElement("DIV");
    //element = target;
    //elementparent.replaceChild(newparentelement, element);
    //newparentelement.appendChild(element);
    //elementvalue = newparentelement.innerHTML;
    //elementvalue = elementvalue.replace(/ style="box-shadow: blue 0px 0px 5px;"/gi, "");
    //elementvalue = elementvalue.replace(/box-shadow: blue 0px 0px 5px;/gi, "");
    //input.innerText = elementvalue;
    //document.body.appendChild(input);
    //document.body.appendChild(changebutton);
    //document.body.appendChild(container);
    //changebutton.addEventListener("click", setelement, false);
}

//add all h2 elements

const headlines2 = document.getElementsByTagName("h2");
for (const headline2 of headlines2) {
    headline2.addEventListener("mouseover", lightUp, false);
    headline2.addEventListener("mouseout", unLightUp, false);
    headline2.addEventListener("click", clickh2, false);
}
//add all h3 elements

const headlines3 = document.getElementsByTagName("h3");
for (const headline3 of headlines3) {
    headline3.addEventListener("mouseover", lightUp, false);
    headline3.addEventListener("mouseout", unLightUp, false);
    headline3.addEventListener("click", clickh3, false);
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
    paragraph.addEventListener("click", clickp, false);
}

//add all A elements

const links = document.getElementsByTagName("a");
for (const link of links) {
    link.addEventListener("mouseover", lightUp, false);
    //link.addEventListener("mouseout", unLightUp, false);
    link.addEventListener("click", clicka, false);
    link.removeAttribute("href");
}


//add all img elements

const images = document.getElementsByTagName("img");
for (const image of images) {
    image.addEventListener("mouseover", lightUp, false);
    image.addEventListener("mouseout", unLightUp, false);
    image.addEventListener("click", clickimg, false);
}

//add all div elements

const divs = document.getElementsByTagName("div");
for (const div of divs) {
    div.addEventListener("mouseover", lightUp, false);
    div.addEventListener("mouseout", unLightUp, false);
    //div.addEventListener("click", clickdiv, false);
}

//add all buttons

const buttons = document.getElementsByTagName("button");
for (const button of buttons) {
    button.addEventListener("mouseover", lightUp, false);
    button.addEventListener("mouseout", unLightUp, false);
    button.addEventListener("click", clickbtn, false);
}
document.body.appendChild(consolebutton);

// the start of all the rest of the tag changing and getting.

//changing h1 elements
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
    h1value = h1value.replace(/ style="box-shadow: blue 0px 0px 5px;"/gi, "");
    h1value = h1value.replace(/box-shadow: blue 0px 0px 5px;/gi, "");
    input.innerText = h1value;
    document.body.appendChild(input);
    document.body.appendChild(changebutton);
    document.body.appendChild(container);
    changebutton.addEventListener("click", seth1, false);
}
function seth1()
{
    //alert("test");
    var h1settext = input.textContent;
    newparent.innerHTML = h1settext;
    newparent.addEventListener("mouseover", lightUp, false);
    newparent.addEventListener("mouseout", unLightUp, false);
    newparent.addEventListener("click", clickh1, false);
    changebutton.remove();
    container.remove();
    input.innerHTML = "";
    input.remove();
   changebutton.removeEventListener("click", seth1, false);
}

//changing h2 elements

var h2;
var h2parent;
var h2value;
var newparent2;
function clickh2(event)
{
    var h2parent = event.target.parentNode;
    newparent2 = document.createElement("DIV");
    h2 = event.target;
    //var h1text = h1.innerHTML;
    h2parent.replaceChild(newparent2, h2);
    newparent2.appendChild(h2);
    h2value = newparent2.innerHTML;
    h2value = h2value.replace(/ style="box-shadow: blue 0px 0px 5px;"/gi, "");
    h2value = h2value.replace(/box-shadow: blue 0px 0px 5px;/gi, "");
    input.innerText = h2value;
    document.body.appendChild(input);
    document.body.appendChild(changebutton);
    document.body.appendChild(container);
    changebutton.addEventListener("click", seth2, false);
}
function seth2()
{
    //alert("test");
    var h2settext = input.textContent;
    newparent2.innerHTML = h2settext;
    newparent2.addEventListener("mouseover", lightUp, false);
    newparent2.addEventListener("mouseout", unLightUp, false);
    newparent2.addEventListener("click", clickh2, false);
    changebutton.remove();
    container.remove();
    input.innerHTML = "";
    input.remove();
   changebutton.removeEventListener("click", seth2, false);
}

//change h3 elements

var h3;
var h3parent;
var h3value;
var newparent3;
function clickh3(event)
{
    var h3parent = event.target.parentNode;
    newparent3 = document.createElement("DIV");
    h3 = event.target;
    //var h1text = h1.innerHTML;
    h3parent.replaceChild(newparent3, h3);
    newparent3.appendChild(h3);
    h3value = newparent3.innerHTML;
    h3value = h3value.replace(/ style="box-shadow: blue 0px 0px 5px;"/gi, "");
    h3value = h3value.replace(/box-shadow: blue 0px 0px 5px;/gi, "");
    input.innerText = h3value;
    document.body.appendChild(input);
    document.body.appendChild(changebutton);
    document.body.appendChild(container);
    changebutton.addEventListener("click", seth3, false);
}
function seth3()
{
    //alert("test");
    var h3settext = input.textContent;
    newparent3.innerHTML = h3settext;
    newparent3.addEventListener("mouseover", lightUp, false);
    newparent3.addEventListener("mouseout", unLightUp, false);
    newparent3.addEventListener("click", clickh3, false);
    changebutton.remove();
    container.remove();
    input.innerHTML = "";
    input.remove();
   changebutton.removeEventListener("click", seth3, false);
}

// change P elements

var p;
var pparent;
var pvalue;
var newparentp;
function clickp(event)
{
    var pparent = event.target.parentNode;
    newparentp = document.createElement("DIV");
    p = event.target;
    //var h1text = h1.innerHTML;
    pparent.replaceChild(newparentp, p);
    newparentp.appendChild(p);
    pvalue = newparentp.innerHTML;
    pvalue = pvalue.replace(/ style="box-shadow: blue 0px 0px 5px;"/gi, "");
    pvalue = pvalue.replace(/box-shadow: blue 0px 0px 5px;/gi, "");
    input.innerText = pvalue;
    document.body.appendChild(input);
    document.body.appendChild(changebutton);
    document.body.appendChild(container);
    changebutton.addEventListener("click", setp, false);
}
function setp()
{
    //alert("test");
    var psettext = input.textContent;
    newparentp.innerHTML = psettext;
    newparentp.addEventListener("mouseover", lightUp, false);
    newparentp.addEventListener("mouseout", unLightUp, false);
    newparentp.addEventListener("click", clickp, false);
    changebutton.remove();
    container.remove();
    input.innerHTML = "";
    input.remove();
   changebutton.removeEventListener("click", setp, false);
}

//change A elements

var a;
var aparent;
var avalue;
var newparenta;
function clicka(event)
{
    var aparent = event.target.parentNode;
    newparenta = document.createElement("DIV");
    a = event.target;
    //var h1text = h1.innerHTML;
    aparent.replaceChild(newparenta, a);
    newparenta.appendChild(a);
    avalue = newparenta.innerHTML;
    avalue = avalue.replace(/ style="box-shadow: blue 0px 0px 5px;"/gi, "");
    avalue = avalue.replace(/box-shadow: blue 0px 0px 5px;/gi, "");
    input.innerText = avalue;
    document.body.appendChild(input);
    document.body.appendChild(changebutton);
    document.body.appendChild(container);
    changebutton.addEventListener("click", seta, false);
}
function seta()
{
    //alert("test");
    var asettext = input.textContent;
    newparenta.innerHTML = asettext;
    newparenta.addEventListener("mouseover", lightUp, false);
    newparenta.addEventListener("mouseout", unLightUp, false);
    newparenta.addEventListener("click", clicka, false);
    changebutton.remove();
    container.remove();
    input.innerHTML = "";
    input.remove();
   changebutton.removeEventListener("click", seta, false);
}

//change buttons

var btn;
var btnparent;
var btnvalue;
var newparentbtn;
function clickbtn(event)
{
    var btnparent = event.target.parentNode;
    newparentbtn = document.createElement("DIV");
    btn = event.target;
    //var h1text = h1.innerHTML;
    btnparent.replaceChild(newparentbtn, btn);
    newparentbtn.appendChild(btn);
    btnvalue = newparentbtn.innerHTML;
    btnvalue = btnvalue.replace(/ style="box-shadow: blue 0px 0px 5px;"/gi, "");
    btnvalue = btnvalue.replace(/box-shadow: blue 0px 0px 5px;/gi, "");
    input.innerText = btnvalue;
    document.body.appendChild(input);
    document.body.appendChild(changebutton);
    document.body.appendChild(container);
    changebutton.addEventListener("click", setbtn, false);
}
function setbtn()
{
    //alert("test");
    var btnsettext = input.textContent;
    newparentbtn.innerHTML = btnsettext;
    newparentbtn.addEventListener("mouseover", lightUp, false);
    newparentbtn.addEventListener("mouseout", unLightUp, false);
    newparentbtn.addEventListener("click", clickbtn, false);
    changebutton.remove();
    container.remove();
    input.innerHTML = "";
    input.remove();
   changebutton.removeEventListener("click", setbtn, false);
}

