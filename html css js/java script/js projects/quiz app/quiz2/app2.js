quiz =[
    {
        question:"Q1: Full form of HTML is",
        a:"Hello to my land",
        b:"hey text markup language",
        c:"Hyper text makeup language",
        d:"Hyper text markup language",
        ans:"ans4"

    },

    {
        question:"Q2: Full form of CSS is",
        a:"Cascading style sheep",
        b:"Cascading style sheet",
        c:"Cartoon style sheet",
        d:"Cascading super sheet",
        ans:"ans2"
    },
     {
        question:"Q3: Full form of HTTP is",
        a:"Hyper text transfer product",
        b:"Hyper text transfer protocol",
        c:"Hyper transfer text  product",
        d:"Hyper transfer text protocol",
        ans:"ans2"

    } ,
    {
        question:"Q4: When we use script",
        a:"In javascript",
        b:"In HTML",
        c:"In CSS",
        d:"None of them",
        ans:"ans1"
    },
    {
        question:"Q5: which thing we can do with LET",
        a:"We can assign agin",
        b:"we can declear again",
        c:"we cannot declear again",
        d:"None of them",
        ans:"ans2"
    },
    {
        question:"Q6: How margin work?",
        a:"top bottom left right",
        b:"top right bottom left",
        c:"top left bottom right",
        d:"option c and a",
        ans:"ans2"
    },
    {
        question:"Q7:Choose the correct HTML element for the largest heading:",
        a:"heading",
        b:"head",
        c:"h6",
        d:"h1",
        ans:"ans4"
    },
    {
        question:"Q8: What is the correct syntax for referring to an external script called 'xxx.js'? ",
        a:"script href=xxx.js",
        b:"script name=xxx.js",
        c:"script src=xxx.js",
        d:"none of them",
        ans:"ans3"
    },
    {
        question:"Q9:How do you write 'Hello World' in an alert box?",
        a:"alert(hello world)",
        b:"alertBox(hello world)",
        c:"alert.document.write(hello world)",
        d:"none of them",
        ans:"ans1"
    },
    {
        question:"Q10:Which is the correct CSS syntax?",
        a:"{body:color=black;}",
        b:"{body;color:black;}",
        c:"body:color=black;",
        d:"body{color:black;}",
        ans:"ans4"
    },
]
var question = document.querySelector(".question")
var option1 = document.querySelector("#option1")
var option2 = document.querySelector("#option2")
var option3 = document.querySelector("#option3")
var option4 = document.querySelector("#option4")
var submit = document.querySelector("#submit")
var answers = document.querySelectorAll(".answer")

var questionCount = 0
function loadQuestion(){
 var questionlist = quiz[questionCount];
 question.innerHTML = questionlist.question;
 option1.innerHTML=questionlist.a
 option2.innerHTML=questionlist.b
 option3.innerHTML=questionlist.c
 option4.innerHTML=questionlist.d
//  

}

function enable(){
    submit.disabled=false
}
// function disable(e){
//     if (answers[e].checked){
//         submit.disabled=false
//     }
//     else{
//         submit.disabled=true
//     }
// }

loadQuestion()
function getAnswer(){
  
    let ans;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            ans = curAnsElem.id
            
        }
        
    }); return ans;
    
}
function disselectall(){
   answers.forEach ((element) =>{
    element.checked=false
   }

   )
    
   }
let score =0
function checkedAnswer(){


    var checkedAnswer = getAnswer()
    console.log(checkedAnswer)
  
    if ( checkedAnswer == quiz[questionCount].ans){
        score+=5
        console.log(score)
    }
    disselectall()
    questionCount++;
    if (questionCount <quiz.length){
        loadQuestion()
    }
    else if(score < 30){
        
       var showscore= document.getElementById("showscore")
    showscore .innerHTML=`<h3>ops! Your score is ${score} </h3>`
       showscore.classList.remove("showarea")
      var no= document.getElementById("bloc")
    no.classList.add("non")
    }
    else{
        var showscore= document.getElementById("showscore")
        showscore .innerHTML=`<h3>congratulations Your score is ${score} </h3>`
           showscore.classList.remove("showarea")
          var no= document.getElementById("bloc")
        no.classList.add("non")
    }
    
    submit.disabled=true
}
