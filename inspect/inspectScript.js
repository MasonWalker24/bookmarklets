var h1 = document.getElementsByTagName("h1");
h1length = h1.length - 1;
for (var i=0;i<h1.length+1; i++) 
{
    h1[i].addEventListener("mouseover", lightUp());
}
function lightUp()
{
 h1[i].style.textShadow = "2px 2px 5px blue"; 
}
