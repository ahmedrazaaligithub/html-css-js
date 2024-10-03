// slider start
var slidercontainar = document.querySelector(".slider-container")
var leftSlide = document.querySelector(".left-slider")
var rightSlide = document.querySelector(".right-slider")
var upButton = document.querySelector(".button-down")
var downButton = document.querySelector(".button-up")
var slidesLength = leftSlide.querySelectorAll(".left-slider-text").length
console.log(slidesLength)
let activeIndex=0
leftSlide.style.top=`-${(slidesLength)}`
upButton.addEventListener("click",()=>changeSlide("up"))
downButton.addEventListener("click",()=>changeSlide("down"))
const changeSlide =(direction)=>{
    const slideHeight=slidercontainar.clientHeight
    // console.log(slideHeight)
    if(direction==="up"){
        activeIndex++;
        if(activeIndex >slidesLength - 1){
            activeIndex=0
        }
        else if (direction==="down"){
            console.log('kff')
            activeIndex--;
            if(activeIndex<0){
                activeIndex=slideHeight -1;
            }
        }
    }
rightSlide.style.transform=`translateY(-${activeIndex*slideHeight
    }px)`
    leftSlide.style.transform=`translateY(${activeIndex*slideHeight
    }px)`
};
// slider end
// color.addEventListener("click",()=>{
// })
function bgcolor(){
    var color= document.getElementsByClassName("cards")
    document.getElementsByClassName("section-1-card-titile").style.color= "white"
    color.style.backgroundColor="black"

}