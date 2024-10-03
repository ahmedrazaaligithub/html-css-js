
function onbtn(){
var image=document.getElementById("image")
image.src="onbulb.png"
var ofbtn = document.getElementById("ofbtn")
ofbtn.classList.remove("red")

var onbtn = document.getElementById("onbtn")
onbtn.classList.add("yellow")
}
function ofbtn(){
var image=document.getElementById("image")
 var src=image.src="of bulb.png"
 var onbtn = document.getElementById("onbtn")
 onbtn.classList.remove("yellow")
 var ofbtn = document.getElementById("ofbtn")
ofbtn.classList.add("red")

}

