function changeImage(){
   var image = document.getElementById("img")
   image.style.height="100vh"
   image.style.width="100%"

}
function tagName(){
var parent = document.getElementById("parent") //bcz of id 'parent' it will just work on parent id
 var p= parent.getElementsByTagName("p")
for (i=0; i<p.length;i++){
p[i].style.backgroundColor="black"
p[i].style.color="white"
p[i].style.textAlign="center"

p[i].style.padding="4px 0px 4px 0px"
p[i].style.borderBottom="3px solid gray"
p[i].style.borderRadius="50px"
}
}
var p =document.getElementsByTagName("p")
for (i=0; i<p.length;i++){
    p[i].style.backgroundColor="gray"
    p[i].style.color="white"
    p[i].style.textAlign="center"
    
    p[i].style.padding="4px 0px 4px 0px"
    p[i].style.borderBottom="3px solid black"
    p[i].style.borderRadius="50px"
    }