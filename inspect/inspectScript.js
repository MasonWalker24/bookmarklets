var h1 = document.getElementsByTagName("h1");
h1length = h1.length - 1;
for(var i = 0; i <= h1length; i++)
{
 var h1_2 = h1[i];
h1_2.setAttribute("onmouseover", "add()");
function add()
{
 h1_2.style.textShadow = "0px 0px 30px blue"; 
}
}
