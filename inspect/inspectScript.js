var h1 = document.getElementsByTagName("h1");
h1length = h1.length - 1;
for (var i=0;i<h1.length+1; i++) {
            h1[i].setAttribute("onmouseover", 'function() {h1[i].style.boxShadow = "0px 0px 30px blue";}')
}
