var h1 = document.getElementsByTagName("h1");
var h1length = h1.length;
int i = 0;
for(i <= h1length)
{
 h1[i].createAttribute("onmouseover", "lightUp()");
  function lightUp()
{
  h1[i].style.boxShadow = "0px 0px 30px blue"
}
}


