// var week=['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
// for(i=0;i<week.length;i++){
//     if(week[i]==="monday"){
//         week.splice(i,1)
//     }
// }

// console.log(week)
// var day ="monday"
// console.log(day.slice(day.length-3,6))
// // var slice =day.slice(0,1)
// // console.log(slice)
// for(i=0;i<week.length;i++){
// console.log(week[i].slice(0,3))
// }
// var gitname=prompt('enter user name')
// var nameisok=true
// for(i=0;i<gitname.length;i++){
//     if(gitname[i]===" "||
//     gitname[i]==='-'||
//     gitname[i]==='?'
//     )
// {nameisok=false
// break
// }
// }
// if(nameisok){
//     alert("name is fine")
//     console.log("fine")
// }
// else{
//     alert("name is not fine")
//     console.log("not fine")

// }
//running array from start to end with end to start
// var arr = [0,1,2,3,4,5,6,7,8,9]
// // var ind = [arr.length - 1]

// // console.log(ind)
// for (i=0;i<arr.length;i++){
    
//     console.log(arr[i],arr.length-1-i)
// }
// let msg= "if u have any query u can contact me on gmailid"
// console.log(msg)
// for(i=0;i<msg.length;i++){
//     console.log(msg.slice(i,i + 5))
//     if(msg.slice(i,i + 5)=="gmail"){
//         alert("dont write gmail")
//     }

// }
// find "world war II" from text then change into "the second world  war"


// var text = "marking World War II the beginning of. Over World War II the next six years"
// //  console.log (text.slice(8,8+12))
// text=text.replace("World War II","scnd world war")
// console.log(text)
// // for (i=0 ;i<text.length;i++){
// //     if(text.slice(i,i+12)==="World War II"){
// //       text =  text.slice(0,i)+"second world war"+  text.slice(i+12)
// //       console.log(text)
// //     }
// // }
// // task
// var username=prompt("write your word")
// username=username[0].toUpperCase()+username.slice(1)
// console.log(username)
var num=1
for (i=1;i<8;i++){
    for (j=1;j<8;j++){
document.write(num+" ")
num++
}
document.write('<br>')
}











for(i=0;i>5;i++){
    for(j=0;j<i;j++){
        document.write("*")
    }
    document.write('<br>')
}
// for(i=5;i>0;i--){
//     for(j=0;j<i;j++){
//         document.write("*")
//     }

//     document.write('<br>')
// }