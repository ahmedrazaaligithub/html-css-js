//funtions

//custom function
// function greet(student){
//     console.log('hello '+ student);
// }
// greet('ahmed');
// greet('raza');
// greet('yameen');

// function employ(fileNumber){
//     return 'working on '+ fileNumber;
// }
// let data =employ(7);
// console.log(data)
// // employ(9);
// const add =(num,num1)=>{
//     return num+ num1;
// }
// let result = add(5,7)
// document.write(result)
// console.log(result)

// recursion
// const writeData = (data,time)=>{
// document.write(data)
// if(time>0){
// writeData(data,time-1)

// }
// }
// writeData('data',5)

// const factorial =(num)=>{
//     if(num>1){
//       return num* factorial(num-1)
//     }
//     return 1

// }
// console.log(factorial(5))

// clousers

var a = ["apple", "banana", "grapes", "mango"];
// a[2]=8
// console.log(a);
// a.forEach((e,i)=>{
//   console.log(e,i)
// })
// filter method
// let b= [1,2,3,4,5,6,7,8,9,10]
// let filteredarray=b.filter((i)=>{
//   if(i%2==0){
//     return true

//   }
// });
// console.log(filteredarray)

//array sort method

// let sort = [2,4,7,1,9,0,6]
// let sortArr= sort.sort((a,b)=>{// it take 2 parameter first will be a value and b will be second value
//   if(a>b){
//     return 1;
//   }
//   else {
//     return -1
//   }
// });
// console.log(sortArr);

// class 6

// let person ={
//   name:'ahmed',
//   cnic:421019955959,
//   eyeColor:'black',
//   canSpeakEnglish:false,
//   speak: function (sen){
// console.log(sen,this.name);
//   }
// }
// person.speak('hello,')
// let person2 ={
//   name:'anus',
//   cnic:421019955959,
//   eyeColor:'black',
//   canSpeakEnglish:false,
//   speak: function (sen){
// console.log(sen,this.name);
//   }
// }
// person2.speak('hello,')
// let animal ={
//   name:'loin',
//   eatsMeat:true,
//   eatGrass:false

// }
// let animal2 ={
//   name:'goar',
//   eatsMeat:false,
//   eatGrass:true
// }

// let student1 = {
//   name: "ahmed",
//   rolno: "402",
//   teacher: "nadir",
//   className: "javascript",
// };

let prevstudent=localStorage.getItem('student')
let student =prevstudent? JSON.parse(prevstudent):[]
const provideStudents = () => {
  let std= {
    name: prompt('enter name'),
    rolno: prompt('enter roll no'),
    teacher: prompt('enter teacher name'),
    className: prompt('enter class name'),
  };
 student.push(std)
 console.log(student);
let stringy= JSON.stringify(student)
localStorage.setItem('student',stringy)

};










// //dom
// let para =document.getElementById('para')
// para.style.backgroundColor='red'
// para.style.width='100%'
// setInterval(function(){
//     let width = para.style.width;
//     if(width=='100%'){
//        console.log(width='10%')
// }
//     // else{
//     //     width+=width.replace('%',"")
//     //     width=width+10+'%'
//     // }
// },1000)

///////////////////////////////////  change colors after seconds///////////////////////////////////////////////////




// console.log(para)
// let para=document.getElementById('para')
// setInterval(function(){
// //    let bg= para.style.backgroundColor='red'
//    let color1= Math.round(Math.random()*1000000)
//    let color2= Math.round(Math.random()*1000000)
//    para.style.backgroundColor=`#${color1}`
//    para.style.color=`#${color2}`
// console.log(para.style.backgroundColor=`#${color1}`)



// },1000)