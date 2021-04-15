//add all h1 elements
const headlines = document.getElementsByTagName("h1");
for (const headline of headlines) {
    headline.addEventListener("mouseover", lightUp, false);
    headline.addEventListener("mouseout", unLightUp, false);
}

function lightUp(event) {
  event.target.style.textShadow = "2px 2px 5px blue";
}
function unLightUp(event)
{
 event.target.style.textShadow = "0px 0px 0px";   
}

//add all h2 elements

const headlines2 = document.getElementsByTagName("h2");
for (const headline2 of headlines2) {
    headline2.addEventListener("mouseover", lightUp, false);
    headline2.addEventListener("mouseout", unLightUp, false);
}

function lightUp(event) {
  event.target.style.textShadow = "2px 2px 5px blue";
}
function unLightUp(event)
{
 event.target.style.textShadow = "0px 0px 0px";   
}

//add all h3 elements

const headlines3 = document.getElementsByTagName("h3");
for (const headline3 of headlines3) {
    headline3.addEventListener("mouseover", lightUp, false);
    headline3.addEventListener("mouseout", unLightUp, false);
}

function lightUp(event) {
  event.target.style.textShadow = "2px 2px 5px blue";
}
function unLightUp(event)
{
 event.target.style.textShadow = "0px 0px 0px";   
}

//add all h4 elements

const headlines4 = document.getElementsByTagName("h4");
for (const headline4 of headlines4) {
    headline4.addEventListener("mouseover", lightUp, false);
    headline4.addEventListener("mouseout", unLightUp, false);
}

function lightUp(event) {
  event.target.style.textShadow = "2px 2px 5px blue";
}
function unLightUp(event)
{
 event.target.style.textShadow = "0px 0px 0px";   
}

//add all P elements

const paragraphs = document.getElementsByTagName("p");
for (const paragraph of paragraphs) {
    paragraph.addEventListener("mouseover", lightUp, false);
    paragraph.addEventListener("mouseout", unLightUp, false);
}

function lightUp(event) {
  event.target.style.textShadow = "2px 2px 5px blue";
}
function unLightUp(event)
{
 event.target.style.textShadow = "0px 0px 0px";   
}


//add all A elements

const links = document.getElementsByTagName("a");
for (const link of links) {
    link.addEventListener("mouseover", lightUp, false);
    link.addEventListener("mouseout", unLightUp, false);
}

function lightUp(event) {
  event.target.style.textShadow = "2px 2px 5px blue";
}
function unLightUp(event)
{
 event.target.style.textShadow = "0px 0px 0px";   
}


//add all img elements

const images = document.getElementsByTagName("img");
for (const image of images) {
    image.addEventListener("mouseover", lightUp, false);
    image.addEventListener("mouseout", unLightUp, false);
}

function lightUp(event) {
  event.target.style.boxShadow = "2px 2px 5px blue";
}
function unLightUp(event)
{
 event.target.style.boxShadow = "0px 0px 0px";   
}

