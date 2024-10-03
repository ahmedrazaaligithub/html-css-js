let ans_1 = document.getElementById("q1-ans1")
let ans_2 = document.getElementById("q2-ans3")
let ans_3 = document.getElementById("q3-ans2")
let ans_4 = document.getElementById("q4-ans4")
score=0
 function correct(){
if (ans_1.checked==true) {
    score++
    alert("ans is correct")
    
} else {
    alert("ans is wrong")
}
if (ans_2.checked==true) {
    score++
    alert("ans is correct")
    
} else {
    alert("ans is wrong")
}
if (ans_3.checked==true) {
    score++
    alert("ans is correct")
    
} else {
    alert("ans is wrong")
}
if (ans_4.checked==true) {
    score++
    alert("ans is correct")
    
} else {
    alert("ans is wrong")
}
alert(score)

 }