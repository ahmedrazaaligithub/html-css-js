//


// function Student(name,roll){
//     this.name=name;
//     this.roll=roll;
//     this.getName=function (){
//         return this.name ;
//     }
// }
// var student1 =new Student("ahmed",123);
// var student2 =new Student("raza",124);

// console.log(student1);
// console.log(student2);
// console.log(student2.getName())
// console.log(student1.getName())
// prototype
// function Student(name,roll){
//     this.name=name;
//     this.roll=roll;

// }
// //let use prototype
// Student.prototype.getName=function(){
//     return this.name
// }
//  var student2 =new Student("raza",124);
//  console.log(student2.getName())
// want to chek property
// var student1 = {
//     name:"ahmed",
//     roll: 123
// }

// we want to chek that student has type rollno or not so let chek
// console.log("roll" in student1) //true
// console.log("job" in student1)//false
// // want to chek property  
// for (var prop in student1){  //its work like loop it will show all the value of student1
//     console.log(prop) //prop is just a variable
// }
//if wr want property and value or both (value,property)
// var student1 = {
//     name:"ahmed",
//     roll: 123,
//     school: "tea"
// }
// for(var val in student1){
//     console.log(val,student1[val])
// }
//has in property

// var student1 = {
//     name:"ahmed",
//     roll: 123,
//     school: "tea"
// }
// for(var val in student1){
//     console.log(val,student1[val])
// }

var student1 = {
    name:"ahmed",
    roll: 123,
    school: "tea"
}
console.log(student1.hasOwnProperty("roll"))

// the diffrence b/w hasownproperrty and line 37 is that hasown will just chek the property that we write