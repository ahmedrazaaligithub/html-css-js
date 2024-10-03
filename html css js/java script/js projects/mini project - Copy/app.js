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
// var color= document.querySelector(".cards")
// color.addEventListener("click",()=>{
// document.querySelector(".section-1-card-titile").style.color= "white"
// color.style.backgroundColor="orange"
// })


// section 4

// function sec4color(){
// var ProductCard= document.getElementsByClassName("ProductCard")

// alert("helloworld")
//  ProductCard.style.backgroundColor="pink"

  
// }
var section5 = document.getElementsByClassName("section-5")

// function backgroundChange() {
// // var b=document.getElementsByClassName("b")
// section5[0].style.backgroundImage="onbulb.png"
//     section5[0].src="onbulb.png"
// console.log(section5.src)
// } 
