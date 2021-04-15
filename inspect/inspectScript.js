var h1 = document.getElementsByTagName("h1")[0];
h1.setAttribute("onmouseover", "add()");
function add()
{
 h1.style.textShadow = "0px 0px 30px blue"; 
}
