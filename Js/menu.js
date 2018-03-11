function nueva(){
   var =10;
if(var=10)
 alert("Es igual a 10");
esle
  alert("No es igual a 10");
var = 20
if(var=20)
 alert("Es igual a 20");
esle
  alert("No es igual a 20");
}



<style type="text/css"> 

#sse50 
{
    border: solid 1px #370202;
    background:#BD0000 url(mb50_3_bg.gif) repeat-x;
    padding:0px;/*changing its value will give menu margins to its container*/
    text-align:left;
    border-radius: 2px;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
}
#sses50
{
    margin:0; text-align:left;/*If you don't want the menu center aligned, remove this line and above text-align:center*/
    font-size:0;
}
        
#sses50 ul, #sses50 li
{
    display: inline;
    list-style-type:none;padding:0;margin:0;border:0;background-image:none;
}
        
#sses50 a
{
    text-align: left;
    display: inline-block;
    font: normal 11px Verdana;
    background: #900 url('mb50_3.gif') no-repeat left top;
    padding: 10px 20px;/*This defines the size of each menu item*/
    color: white;
    text-decoration: none;
}
        
#sses50 a:hover, #sses50 a.current
{
    background-position: 0% -60px;
    color: white;
}
#sses50 a.end
{
    width:2px;
    padding-left:0;padding-right:0;
}


</style> 



/*! Visit www.menucool.com for source code, other menu scripts and web UI controls
*  Please keep this notice intact. Thank you. */

var sse50 = function () {
    return {
        initMenu: function () {
            var m = document.getElementById('sses50');
            if (!m) return;
            m.style.width = m.getElementsByTagName("ul")[0].offsetWidth + 1 + "px";
            var url = document.location.href.toLowerCase();
            var a = m.getElementsByTagName("a");
            var k = -1;
            var l = -1;
            var hasEnd = 0; 
            for (var i = 0; i < a.length; i++) {
                if (a[i].href && url.indexOf(a[i].href.toLowerCase()) != -1 && a[i].href.length > l) {
                    k = i;
                    l = a[i].href.length;
                }
                if (a[i].className == "end")
                    hasEnd = 1;
            }
            if (k == -1 && /:\/\/(?:www\.)?[^.\/]+?\.[^.\/]+\/?$/.test) {
                for (var i = 0; i < a.length; i++) {
                    if (a[i].getAttribute("maptopuredomain") == "true") {
                        k = i;
                        break;
                    }
                }
                if (k == -1 && a[0].getAttribute("maptopuredomain") != "false")
                    k = 0;
            }
            if (k > -1) {
                a[k].className = 'current';
            }
            l = a.length;
            if (hasEnd) l--;
            for (i = 0; i < l; i++) {
                a[i].onmouseover = function () {
                    for (j = 0; j < l; j++) {
                        a[j].className = '';
                    }
                    this.className = 'current';
                };
                a[i].onmouseout = function () {
                    for (j = 0; j < l; j++) {
                        a[j].className = '';
                        if (k > -1) {
                            a[k].className = 'current';
                        }
                    }
                };
            }
        }
    };
} ();

if (window.addEventListener) {
    window.addEventListener("load", sse50.initMenu, false);

}
else if (window.attachEvent) {
    window.attachEvent("onload", sse50.initMenu);

}
else {
    window["onload"] = sse50.initMenu;
}

