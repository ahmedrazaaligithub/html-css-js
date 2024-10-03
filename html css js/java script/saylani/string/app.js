 //running alert 3 times
//  for(i=1;i<4;i++){
//     alert(`alert running ${ i } time`)
//  }

// getting error on space
// let spacError= prompt("if you will give space thier will be error")
// for (i=0;i<spacError.length;i++){
//     if(spacError[i]===" "){
//         console.log("write without space")
//     }
// }


// using split on space then gettng first value of word
// let inputValues = prompt("Please enter two values separated by a space");

 // Split the input values into an array
// let valuesArray = inputValues.split(" ");

// for (i=0; 1<valuesArray.length;i++){
// let first= valuesArray[i].charAt(0)
// console.log(first.toUpperCase())
// }

// making tabel of 6
// for(i=1;i<11;i++){
//     var table = "6"+" " + "x "+" " + i+ "= "+i * 6+"<br>"
//     document.write(table)
// }


// break in loop
// for (i=1;i>0;i++){
//     if(i===17){
//      break
//     }
//     console.log(i)
// }
// breking afer finding karachi
// let arr=["lahore","karachi","islamabad"]
// for(i=0;i<arr.length;i++){
//     if (arr[i]==="karachi"){
//         alert(`${arr[ i ]} is cleanest city`)
//          

// break
//     }
// }
// making tree from aary and loop
//  var arr =['1','2','3','4','5','6']
//  let update=""
// for(i=0;i<arr.length;i++){
// update=update + arr[i]
// console.log(update)
// }

//plidrome word
// let a=prompt('write here')
// var check;
// for(i=a.length - 1;i>=0;i--){
//     check+= a[i]
// }
// if (check===a){
//     alert('it is plidrome word')
// }
// getting smallest value from array

// getting smallest value
// const numbers = [5, 3, 8, 1, 9, 2];

// // Initialize smallest value with the first element of the array
// let smallest = numbers[0];

// // Loop through the array
// for (let i = 1; i < numbers.length; i++) {
//   // If current element is smaller than current smallest, update smallest
//   if (numbers[i] < smallest) {
//     smallest = numbers[i];
//   }
// }

// Print the smallest value
// console.log(`The smallest value in the array is ${smallest}.`);
// // This code initializes the smallest value as the first element of the array, and then loops through the rest of the array, checking each element to see if it is smaller than the current smallest value. If it is, the smallest value is updated to the new element. Once the loop is finished, the smallest value is printed to the console.


// // getting largest value
// const numbers = [5, 3, 8, 1, 9, 2];

// // Initialize largest value with the first element of the array
// let largest = numbers[0];

// // Loop through the array
// for (let i = 1; i < numbers.length; i++) {
//   // If current element is larger than current largest, update largest
//   if (numbers[i] > largest) {
//     largest = numbers[i];
//   }
// }

// // Print the largest value
// console.log(`The largest value in the array is ${largest}.`);

// sorting
let numbers = [5, 3, 8, 1, 9, 2];

// Loop through the array
for (let i = 0; i < numbers.length - 1; i++) {
  for (let j = i + 1; j < numbers.length; j++) {
    // If the current element is larger than the next element, swap them
    if (numbers[i] > numbers[j]) {
      const temp = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = temp;
    }
  }
}

// Print the sorted array
console.log(`The sorted array is [${numbers}].`);
// //nested loop
// // adding name of two array
// var arr =["ahmed","raza",'qadri']
// var arr2 =["ali",'essa',"attari"]


// for(i=0;i<arr.length;i++){
//         document.write(arr[i]+arr2[i])
//         document.write('<br>')
//         }
// for(i=0;i<arr.length;i++){
//     for(j=0;j<arr2.length;j++){
//         console.log(arr[i] +" "+ arr2[j])
//     }
// }

// making tree without aary and with nested loop
// for (i=0;i<11;i++){
//     for(j=0;j<6;j++){
//         document.write(j)
//     }
//     document.write('<br>')
// }
// for(i=0;i<10;i++){
//     for(j=0;j<i;j++){
//         document.write('*')
//     }
//    document.write('<br>')
//     }

//map 
// prompt("write with space").split(" ").map((e)=>{
  
//   console.log(e[0])
// })
// var equal;
var arr =[1,2,3,4,5,6,7,8,10]
for (i=0;i>arr.length;i++){
  if(arr[i] + 1!== arr[i + 1])
  console.log([i] + 1)
}
// for (i=0;i<arr.length;i++){
//   if(i!==arr[i])
//     console.log(i)
// }