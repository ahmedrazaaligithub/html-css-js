//IF…ELSE & ELSE IF STATEMENT,
// TESTING SET OF CONDITIONS

// task1
// const value = 'azAZ'

// for (i=0;i<value.length;i++){
//     const result = `${value[i]}=>${value.charCodeAt(i)}`
//     console.log(result)
// }
// task2 
// let num1 = prompt("Enter first integer:");
// let num2 = prompt("Enter second integer:");

// if (num1 > num2) {
//   console.log(num1 + " is larger.");
// } else if (num2 > num1) {
//   console.log(num2 + " is larger.");
// } else {
//   console.log("The two integers are equal.");
// }
// // task 3
// let number = +prompt("Enter a number:");

// if (number > 0) {
//   alert("The number is positive.");
// } else if (number < 0) {
//   alert("The number is negative.");
// } else {
//   alert("The number is zero.");
// }


//task 4
// Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise
// let val=prompt('chek the word')
//     if(val==='a'||val==='e'||val==='i'||val==='o'||val==='u'){
//         alert("its vowel")
//     }else('its not vowel')

//task5 
// const password= 'ahmedRaza1234'
// let pass=prompt('write the value')
// let check= password==pass
// if(check){
//     alert(true)
// }
// else{
//     alert('wrong password')
// }


// task6

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";}
// else{
// greeting = "Good evening";
// }
// task 7
let time = +prompt("Enter time in 24-hour clock format (e.g. 1900 for 7pm)");

if (time >= 0000 && time < 1200) {
  alert("Good Morning!");
} else if (time >= 1200 && time < 1700) {
  alert("Good Afternoon!");
} else if (time >= 1700 && time < 2100) {
  alert("Good Evening!");
} else if (time >= 2100 && time <= 2359) {
  alert("Good Night!");
} else {
  alert("Invalid input. Please enter a time in 24-hour clock format.");
}
