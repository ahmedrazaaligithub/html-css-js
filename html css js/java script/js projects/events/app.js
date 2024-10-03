document.getElementById("text").style.display="none"

function  readMore(){
    var text = document.getElementById("text").innerHTML
    document.getElementById("para").innerHTML=text
    
}
function readLess(){
    var text = document.getElementById("text").innerHTML
    document.getElementById("text").innerHTML=para
    
}


// function changeImage(){
//    var carImg= document.getElementById("img")
//    carImg.src= "https://stimg.cardekho.com/images/carexteriorimages/930x620/Lamborghini/Huracan-EVO/7195/1645612088168/front-left-side-47.jpg"
//   //  big.className="car"

//   }
// function changeImageBefore(){
//    var carImg= document.getElementById("img")
//    carImg.src= "images/car.webp"
//   //  carImg.className="car"
// }
// easy work of line 19 to28  this thing we will do directly from onclick (html)

function changeImage(id,src){
  var image = document.getElementById(id)
  image.src=src

  }