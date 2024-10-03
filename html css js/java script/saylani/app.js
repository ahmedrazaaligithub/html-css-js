// var number1 = [10,20,80,85,90]
// var number2 = [15,25,35,80,99]

// var total1 = 0
// var total2 = 0

for (var i = 0 ; i < number1.length && number2.length ; i++) {
    total1 = total1 + number1[i]
    total2 = total2 + number2[i]

    console.log(total1)
    console.log(total2)
}


if(total1 > total2){
    alert('number1 is grater')
}else{
    alert('number2 is grater')
}


var numbers = ["1","2","3","4","5","6","7","8","9","0"]

var number3 = ""

for (var a = 1 ; a < 11  ; a++) {
    number3 = number3 + a

    console.log(number3)
}

for (var b = 2 ; b < 51 ; b = b + 2) {
    console.log(b)
}