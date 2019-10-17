var m = document.getElementsByTagName("img");
var d = document.getElementById("div");
var pp = document.getElementById("pp")
console.log(m);
var s = 0;
var n =[0 , 1 , 2 , 3, 4, 5, ];
 n.forEach(r=>{
m[r].addEventListener("click" , fun);
 });

 function fun (event){
s=event.target.getAttribute("src");
console.log(s);
pp.innerHTML="<img  src=" + s + "  class='nn' / > ";
d.style="background:rgba(179, 179, 179 , 0.5)"
 }


