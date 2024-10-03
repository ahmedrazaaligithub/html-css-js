// if(true){
//     var name = "ahmed"
// }
// console.log(name)
// if we use let on line 2 so console value be an error.bcz let will work on inside of his area and consoloe is out side from if area
// if(true){
//     let fullname = "raza"
// }
// console.log(fullname)



// tempelate literals
// let firstname= "ahmed"
// let lastname= "raza"
// console.log(`Hello! this is ${firstname}${lastname}`)


// spread
// let a = ["ahmed","yameen"];  //threr are 2 method of spread
// let b = ["ali","yaseen"];
// let merge = a.concat(b) //first method 
// console.log(merge)

// let c = {fname:"yameen"};// 2nd method it will also work on object
// let d = {...c,lname:"yaseen"};

// console.log(d)

// object destructuring
// let std ={
//     name:"ahmed",
//     year:"2ndyear",
//     institute:"aptech",
// };
// console.log(std.name)  //old method
// let {name,institute}= std; //new method
// console.log(`my name is ${name} my institute is ${institute} `)
// //ternery operators
// if else with old method
// age=32
// if (age<30){
//     console.log(`${age}age is less then 30`)
// }
// else{
//     console.log(` ${age}age is greater then 30`)

// }
// if else with es6
// var chek = age < 30 ?  "30 se chota hai":"30 se bara hai "
// console.log(chek)

// var bool = true
// var name = bool && "ahmed"
// console.log(name)


//async & sync (asyncronus & syncronus)
// var name = "ahmed"
// setTimeout(() => {        // number 1 will show after number 2 ans 3 due settimeout so its a async js
//    console.log(name) 
// }, 1000);

// console.log("number 2")
// console.log("number 3")
  


// converting a value into b and b value into a by es6
// let a = 5
// let b = 10
// [a=b]=[b=a]
// console.log(b)

// promise 
// let promise = new Promise(function(resolve,reject){
//     var zinger = "khilaya"
//     if (zinger === "nhi khilaya"){
//         resolve("zinger khilaya")
//     }
//     else{
//         reject("nhi khilaya")
//     }
// } )
// promise.then(function(data){
//     console.log(data)
//   })  
// .catch(function(error){
//     console.log(error)
// })



// // function
// let foo = function(){  //in this method we have display name on let
//     console.log("hello")
// }
// foo()
//arrow function
// let arro = (name) =>{
//     console.log(`hello${name}`)
// }
// arro("ahmed")
// let arr = () => "ahmed"    // thats how you can return anyting without  {}
// console.log(arr())


// setInterval() in first value it will take function then time
// call back function
// setInterval(()=>console.log("hello world"),2000)  //function inside setinterval or any thing that will call back function
// let getdata = (renderdata)=>{ //if any function have parameter and the perameter is also function so it wil high order function
//     console.log("siowd")
// setTimeout(() => {
//     renderdata("ahmed")
// }, 2000);
// }
// let renderdata=(data)=>{
//     console.log(data)
// }
// getdata(renderdata)


// function of array 
// let arr = [
//     {name:"ahmed",age:17},
//     {name:"anus",age:15}

// ]
// let filter = arr.filter((a)=>{
// return age===17
// })
// console.log(filter)
// short of line 129 131
// let filter = arr.filter((a)=>a.age===17     // arr.age ===1417 is equal to return   arr.age===17
// )
// console.log(filter)

// array map         // going to multiply array with es6 method
// var arr =[2,4,6,8]
// var map= arr.map((a)=>a*2)
// console.log(map
// )
// var obj = [{
//     name:"ahmed",
//     age:17
// },
// {
//     name:"asad",
//     age:32
// }

// ]
// var mobj = obj.map((e)=>
//  {return e.name="ahmed"}
// )
// console.log(mobj)

var add =[]
var nam = document.getElementById('Name')
var age = document.getElementById('Age')
var School = document.getElementById('School')
var fnam = document.getElementById('Fname')
var button = document.querySelector('button')
var tbody =document.querySelector('tbody')
var del=(index)=>{
 add.splice(index,1)
    console.log(add)
    renderTable()
      }
let addItem=()=>{
add.push({NAME:nam.value,
Age:age.value,
School:School.value,
Fnam:fnam.value
})
renderTable()
 
  
 
  console.log(add)
  nam.value=""
  age.value=""
  School.value=""
  fnam.value=""
}
let renderTable=()=>{
      tbody.innerHTML=""
      add.map((add,index)=>{
            tbody.innerHTML+=`<tr key=${index}><td>${add.NAME}</td>
            <td >${add.Age}</td>
            <td>${add.School}</td>
            <td>${add.Fnam}</td>
            <td><button onclick="del(${index})">deleet</button></td>
            </tr>`
      
      })
      
}