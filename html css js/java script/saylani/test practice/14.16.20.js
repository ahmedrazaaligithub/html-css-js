// task1
// let emptyarr=[];
// let fill= emptyarr.push('ahmed','raza','ali')
// console.log(emptyarr)
// // task 3
// let names = ["ahmed", "raza", "ali", "farooq"];
// // task 4
// let boolen = [true,false];
// task5
// let mix = ['ahmed',true,false,1,2,3];
// task 6
// let qualification =['SSC', 'HSC', 'BCS','BS', 'BCOM', 'MS', 'M', 'Phil', 'PhD']
// for(i=0;i<qualification.length;i++){
//     document.write(i+1+')', qualification[i]+'<br>');
// }
// task 8
// let nam=['ahmed','raza','ali']
// let per=['22%','88%','60']
// for(i=0;i<nam.length;i++){
//     for (j=0;j<per.length;j++){
//         console.log(nam[i],per[i])
//         break
//     }
// }
//task9
// let color =['red','green','blue','white']
// let user ='red'
// color.push(user)
// // console.log(color)
// color.unshift('pink','orange')
// // console.log(color)
// color.shift()
// // console.log(color)
// color.pop()
// console.log(color)
// let sp=2
// let spl=color.splice(sp,1)
// console.log(color);
// let atd = ["44", "22", "66", "33", "55"];
// // atd.sort((a,b)=>b-a)
// //     console.log(atd)  //with sort method

// let numbers = [5, 3, 8, 1, 9, 2];

// // Loop through the array
// console.log(numbers.length - 1)
// for(i=0;i<numbers.length - 1;i++){
//     for(j=i;j<numbers.length;j++){
//         if(numbers[i]>numbers[j]){
//             const temp =numbers[i]
//             numbers[i]=numbers[j]
//             numbers[j]=temp
//         }
//     }
// }
// task 10
// let studentScores = [];
// for (let i = 0; i < 5; i++) {
//   studentScores.push(parseInt(prompt(`Enter score for student ${i+1}`)));
// }

// console.log(`Original Scores ${studentScores}`);

// studentScores.sort(function(a, b){return a-b});

// console.log(`Sorted Scores ${studentScores}`);





// console.log(`The sorted array is [${numbers}].`);
// Initializing array with city names
// task 11
// let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// let selectedCities = cities.slice(0, 3);

// console.log("Cities array " + cities);
// console.log("Selected cities array " + selectedCities);
// // task 12
// var arr = ['This' , ' is' , ' my' , ' cat'].join(' ')
// console.log(arr);
// task 13
// let queue = [];

// queue.push("A");
// queue.push("B");
// queue.push("C");

// console.log(queue.shift());
// console.log(queue.shift()); 
// console.log(queue.shift()); 



// chap 17/20
//task 1
// let multiArray = [[], [], []];

// task 2
// let multiArray = [[0,1,2,3], [1,0,1,2], [2,1,0,1]];
// for (i=0;i<multiArray.length;i++){
//      document.write(multiArray[i]+'<br>')
// }
// task 3
// for (i=0;i<=10;i++){
//           document.write(i +  '<br>')
//      }
// task 4
// let num = +prompt("Enter a number for multiplication table");
// let length = +prompt("Enter the length of multiplication table");

// for (let i = 1; i <= length; i++) {
//   let result = num * i;
//   console.log(num + " x " + i + " = " + result);
// }
// task 5

// let fruits = ['apple', 'banana', 'mango', 'orange','strawberry']
// for (let i = 1; i <fruits.length; i++) {
//       document.write(fruits[i] +'<br>')
//       document.write('the index of'+fruits[i] +'is ' + i +'<br> ')
//      }
// task 6
// document.write("<b>Counting:</b><br>");
// for (var i = 1; i <= 15; i++) {
//   document.write(i + ", ");
// }
// document.write("<br><b>Reverse counting:</b><br>");
// for (var i = 10; i >= 1; i--) {
//   document.write(i + ", ");
// }
// document.write("<br><b>Reverse counting:</b><br>");
// for (var i = 10; i >= 1; i--) {
//   document.write(i + ", ");
// }
// document.write("<br><b>Even:</b><br>");
// for (var i = 0; i <= 20; i+=2) {
//   document.write(i + ", ");
// }
// document.write("<br><b>Odd:</b><br>");
// for (var i = 1; i <= 20; i+=2) {
//   document.write(i + ", ");
// }

// document.write("<br><b>Series:</b><br>");
// for (var i = 1; i <= 10; i++) {
//   document.write(i*2 + "k, ");
// }


// task 7 
// let snacks = ['cake', 'appleie', 'cookie', 'chips', 'patties']
// let user =prompt()
// let assign =false
// for(i=0;i<snacks.length;i++){
//     if(snacks[i]==user){
//        assign=true
// console.log(`${snacks[i] } is available`);
//     }
// }

// if(!assign){
//     console.log(`its available`);

    
// }

// task 7 with index of method

// let index = snacks.indexOf(user)
// console.log(index)


// if(index!==-1){
//     console.log('its available on index '+index);
// }
// else{
//     console.log('its not');
// }

// task 8//finding largest
let lg  = [24, 53, 78, 91, 12]
let init = lg[0]
let temp;
// for(i=0;i<lg.length;i++){
//     if(init<lg[i]){
//         init=lg[i]
//     }
// }
// console.log(init);

// task 9//finding smalles

// for(i=0;i<lg.length;i++){
// if(init>lg[i]){
//     init=lg[i]
// }
// }
// console.log(init)
// for (i=1;i<=100;i++){
//     if(i%5==0){
//         console.log(i);
//     }
// }

// var count =0
// for(i=0;i<100;i=i+10){
// for(j=i;j<i+10;j++){
//     document.write(j+'  ')
// }
// document.write('<br>')
// }
for(i=0;i<10;i++){
    for(j=0;j<i;j++){
        document.write('*')
    }
    
    document.write('<br>')
}
// var num=1
// for (i=1;i<8;i++){
//     for (j=1;j<8;j++){
// document.write(num+" ")
// num++
// }
// document.write('<br>')
// }

//task 10
for (let i = 1; i <= 20; i++) {
    console.log(i * 5);
  }
  