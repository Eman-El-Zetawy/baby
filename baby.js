    var  img = document.getElementsByTagName("img");
    var photo = document.getElementById("photo");
    var src , value , index =[0 , 1 , 2 , 3, 4, 5] , newSrc , text =["image-1" , "image-2" , "image-3" , "image-4" ,"image-5" , "image-6" ];
index.forEach(r=>{   img[r].addEventListener("click" , click_image); });
function click_image (event){
    value = event.target.getAttribute("id");
    src =event.target.getAttribute("src");
    draw(src);
    }
function click_x (){
    photo.innerHTML =" ";
    photo.style="position : unset ";
    }
function move(event){
    var id = event.target.getAttribute("id");
    if(id=="left"){ 
                if(value > 1){
                    newSrc=img[--value].getAttribute("src");
                    return draw(newSrc); }
            else
                 if(value == 1){ 
                    newSrc=img[--value].getAttribute("src");
                    return draw(newSrc); }
         return ;  }
    if( id=="right"){
            if( value < 4){
                    newSrc=img[++value].getAttribute("src");
                  return  draw(newSrc); }
             else 
                    if(value==4){
                    newSrc=img[++value].getAttribute("src");
                    return  draw(newSrc);
            }
     return ;  }  }
function draw (src){
    photo.innerHTML ='<img  src=' + src + ' class="new_img" / > ';
    photo.innerHTML +='<a href="#" class="box_x" onclick="click_x()">X</a>' ; 
    photo.style ="position: absolute ";
    photo.innerHTML +=' <p class="para">'+text[value]+'</p>';
    photo.innerHTML +='<a href="#" id="left" class="left" onclick="move(event)">'+'<a href="#" id="left" onclick="move(event)" class="back">back</a>'+'</a><a  href="#" id="right" class="right" onclick="move(event)">'+'<a href="#"  id="right" class="next" onclick="move(event)" >next</a>'+'</a>';
if(value==5){   document.getElementsByClassName("next")[0].style.color ="gainsboro";}                                                                                                                                                                         
if(value==0){   document.getElementsByClassName("back")[0].style.color ="gainsboro";}

              }
            //  