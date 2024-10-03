// task 1
// let city = prompt("Enter city name");
// if (city.toLowerCase() === "karachi") {
//   console.log("Welcome to city of lights");
// }

// task 2
// let gender = prompt("Enter your gender (male/female)");

// if (gender.toLowerCase() === "male") {
//   console.log("Good Morning Sir");
// } else if (gender.toLowerCase() === "female") {
//   console.log("Good Morning Ma'am");
// } else {
//   console.log("Invalid input. Please enter either 'male' or 'female'.");
// }
// task3 
// let color = prompt("Enter the color of the traffic signal");

// if (color.toLowerCase() === "red") {
//   alert("Must stop");
// } else if (color.toLowerCase() === "yellow") {
//   alert("Ready to move");
// } else if (color.toLowerCase() === "green") {
//   alert("Move now");
// } else {
//   alert("Invalid input. Please enter either 'red', 'yellow', or 'green'.");
// }
// task 4
let fuel = +prompt("Enter the remaining fuel in your car (in litres)");

if (fuel < 0.25) {
  alert("Please refill the fuel in your car");
}




// task 5
// a=5
// if (--a==4){
//     console.log('condition is write')
// }
// if (a--==4){
//     console.log('condition is write')
// }
// var b= 82
// if (b++==82){
//     console.log('condition is write')
// }

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");//
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");//
// }
// if(c === 14){
// alert("condition 4 is true");
// }


// task 

// let labourlCost=20000
// let martialCost = 2000
// let finalConst = labourlCost+martialCost
// if(finalConst==labourlCost+martialCost){
//     alert('costs are equall')
// }
// task 6
// let mathMarks = +prompt("Enter your Mathematics marks");
// let englishMarks = +prompt("Enter your English marks");
// let computerMarks = +prompt("Enter your Computer marks");
// let totalMarks = +prompt("Enter total marks");

// let obtainedMarks = mathMarks + englishMarks + computerMarks;
// let percentage = (obtainedMarks / totalMarks) * 100;

// let grade;
// if (percentage >= 80) {
//   grade = "A-one";
// } else if (percentage >= 70) {
//   grade = "A";
// } else if (percentage >= 60) {
//   grade = "B";
// } else if (percentage >= 50) {
//   grade = "C";
// } else if (percentage >= 40) {
//   grade = "D";
// } else {
//   grade = "Fail";
// }

// document.write("Total Marks " + totalMarks + "<br>");
// document.write("Obtained Marks " + obtainedMarks + "<br>");
// document.write("Percentage " + percentage.toFixed(2) + "%<br>");
// document.write("Grade " + grade);

// task7
// guessGame
// const secrateNumber =17
// let user = prompt('guesss the number')
// let diff = user == secrateNumber
// if(diff){
//     alert('congrates you have find the number')
//     ++diff
// }
// let clos= 18
// let closeEnough= user==clos
// if(closeEnough){
//     alert('close enough')
// }


//task 8
// let divid= prompt()
// let result =divid%3==0
// if(result){
//     alert('this value id divisible by 3')
// }
// else{
//     alert('this number is not divisible by 3')
// }


//task9
// if(91%2==0){
//     alert('even')
// }
// else{
//     alert('odd')
// }
// task 10
// let temperature = +prompt("Enter the temperature in Celsius");

// if (temperature > 40) {
//   alert("It is too hot outside.");
// } else if (temperature > 30) {
//   alert("The Weather today is Normal.");
// } else if (temperature > 20) {
//   alert("Today's Weather is cool.");
// } else if (temperature > 10) {
//   alert("OMG! Today's weather is so Cool.");
// } else {
//   alert("The temperature is too low.");
// }


// task 11
let num1 = +prompt("Enter first number");
let num2 = +prompt("Enter second number");
let operator = prompt("Enter operator (+, -, *, /, %)");

let result;

if (operator === "+") {
  result = num1 + num2;
} else if (operator === "-") {
  result = num1 - num2;
} else if (operator === "*") {
  result = num1 * num2;
} else if (operator === "/") {
  result = num1 / num2;
} else if (operator === "%") {
  result = num1 % num2;
} else {
  alert("Invalid operator. Please enter a valid operator.");
}

if (result !== '') {
  alert("Result " + result);
}
