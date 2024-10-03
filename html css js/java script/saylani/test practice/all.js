// var a= 2
//  var alert= 1

// console.log(alert);

// let user=prompt()
// if(user%2==0){
//     alert("even")
// }
// else{
//     alert('odd')
// }

// Swal.fire(
//     'Good job!',
//     'You clicked the button!',
//     'success'
//   )
// operaters
//   let a= 2 + 3 * 4 - 6 / 2
//   console.log(a)//11
//   let b=(4 + 5) * 3 - 10 / 2
//   console.log(b)//22
//   let c=  20 / (4 * (4 + 3)) - 2
// console.log(c.toFixed(2));
// let d=(6 + 2) * (4 / 2) + 10 - 7
// console.log(d);//19
// let e =8 * 2 / 4 + 6 - 1
// console.log(e);
// let f=10 - 4 * 3 + 8 / 4
// console.log(f);//0
// let g= 2 * 3 + 4 * 5 - 10
// console.log(g);
// let h= (7 + 3) * 2 - 5 / 5
// console.log(h);//19
// let i=5 * (3 - 2) + 8 / 4
// console.log(i);//9
// let j=10 / (2 + 3) + 6 * 2 - 5
// console.log(j);

// inc/dec
// let num=2
// let a= 2
// let b= 4
// console.log(++a,a);
// let sum = a - b++ + ++b - --a +a-- + b++ - ++b

// console.log(a)//0
// console.log(b)//8
// console.log(sum)//2

// let chicken = 600
// let beef = 900
// let mutton = 1000

// let item = prompt('which meet you want')
// let quantity= +prompt ('how much you want')

// if (item=='chicken'){
//   alert(`chicken is ${chicken}RS per kg ` )
//   alert(quantity+"kg chicken is upto "+ chicken * quantity)
// }
// else if(item=='beef'){
//   alert(`beef is ${beef}RS per kg ` )
//   alert(quantity+"kg beef is upto "+ beef * quantity)
// }else if(item=='muton'){
//   alert(`mutton is ${mutton}RS per kg ` )
//   alert(quantity+"kg beef is upto "+ mutton * quantity)
// }
// else {
//   alert('')
// }

// let val = +prompt('write first value')
// let operator = prompt('write operator')
// let val2 = +prompt('write second value')
// if(operator =='+'){
//   alert(val+val2)
// }
// else if (operator=='-'){
//   alert(val-val2)

// }
// else if (operator=='/'){
//   alert(val/val2)

// }
// else if (operator=='*'){
//   alert(val*val2)

// }

// let day = +prompt("get date according to your number")

//  if (day==1){
//   alert('its monday')
// }
// else if (day==2){
//   alert('its tuesday')
// }
// else if (day==3){
//   alert('its wednesday')
// }
// else if (day==4){
//   alert('its thursday')
// }
// else if (day==5){
//   alert('its friday')
// }
// else if (day==6){
//   alert('its saturday')
// }
// else if (day==7){
//   alert('its sunday')
// }
// else {
//   alert('enter valid number')
// }

let menu = prompt("what you want to eat like pizza, burger, biryani"
).
toLowerCase();

if (menu == "pizza") {
  var flavor = prompt(
    "which flavor you want tikka , bbq , fajita , malai boti"
  );
  if (
    flavor == "tikka" ||
    flavor == "fajita" ||
    flavor == "bbq" ||
    flavor == "malai boti"
  ) {
    alert("its available");
    var size = prompt(
      "which size you want , we have medium large and small as well"
    );
    if (size == "medium") {
      var m = alert("medium is upto 600");
      let quantity = prompt(
        "how much you want, if you purchase more than 5 there will be 10% discount"
      );
      if (quantity <= 5) {
        alert(600 * quantity);
      } else {
        let minus5 = quantity - 5;
        minus5 *= 540;
        alert(minus5 + 5 * 600);
      }
    } else if (size == "large") {
      var l = alert("large is upto 800");
      let quantity = prompt(
        "how much you want, if you purchase more than 5 there will be 10% discount"
      );
      if (quantity <= 5) {
        alert(800 * quantity );
      } else {
        let minus5 = quantity - 5;
        minus5 *= 720;
        console.log(minus5)
        let pl= 5*752
        alert(minus5 +pl);
      }
    } else if (size == "small") {
      var s = alert("small is upto 400");
      let quantity = prompt(
        "how much you want, if you purchase more than 5 there will be 10% discount"
      );
      if (quantity <= 5) {
        alert(400 * quantity);
      } else {
        let minus5 = quantity - 5;
        minus5 *= 360;
        alert(minus5 + 5 * 400);
      }
      alert(400 * quantity);
    } else {
      alert("this size is not available");
    }
  }
} else if (menu == "biryani") {
  var flavor = prompt("which biryani you want chiken , beef ,aalu");
  if (flavor == "chicken" || flavor == "beef" || flavor == "aalu") {
    alert("its available");
    if (flavor == "chicken") {
      alert("chicken biryani is upto 270 per plate");

      let quantity = +prompt(
        "how many plates you want, if you purchase more than 5 there will be 10% discount"
      );
      if (quantity <= 5) {
        alert(270 * quantity);
      } else {
        let minus5 = quantity - 5;
        minus5 *= 243;
        alert(minus5 + 5 * 270);
      }
    } else if (flavor == "aalu") {
      alert("aalu biryani is upto 180 per plate");

      let quantity = +prompt(
        "how many plates you want, if you purchase more than 5 there will be 10% discount"
      );
      if (quantity <= 5) {
        alert(180 * quantity);
      } else {
        let minus5 = quantity - 5;
        minus5 *= 162;
        alert(minus5 + 5 * 180);
      }
    } else if (flavor == "beef") {
      alert("beef biryani is upto 320 per plate");

      let quantity = +prompt(
        "how many plates you want, if you purchase more than 5 there will be 10% discount"
      );
      if (quantity <= 5) {
        alert(320 * quantity);
      } else {
        let minus5 = quantity - 5;
        minus5 *= 288;
        alert(minus5 + 5 * 320);
      }
    } else {
      alert("its not available");
    }
  }
} else if (menu == "burger") {
  var flavor = prompt("which burger you want chiken , beef ,zinger , lava");
  if (
    flavor == "chicken" ||
    flavor == "beef" ||
    flavor == "zinger" ||
    flavor == "lava"
  ) {
    alert("its available");
    if (flavor == "chicken") {
      alert("per chicken burger is upto 500");

      let quantity = +prompt(
        "how many burgers you want, if you purchase more than 5 there will be 10% discount"
      );
      if (quantity <= 5) {
        alert(500 * quantity);
      } else {
        let minus5 = quantity - 5;
        minus5 *= 450;
        alert(minus5 + 5 * 500);
      }
    } else if (flavor == "beef") {
      alert("per beef burger is upto 500");
      let quantity = +prompt(
        "how many burgers you want, if you purchase more than 5 there will be 10% discount"
      );
      if (quantity <= 5) {
        alert(500 * quantity);
      } else {
        let minus5 = quantity - 5;
        minus5 *= 450;
        alert(minus5 + 5 * 500);
      }
    } else if (flavor == "zinger") {
      alert("per zinger burger is upto 600");

      let quantity = +prompt(
        "how many burgers you want, if you purchase more than 5 there will be 10% discount"
      );
      if (quantity <= 5) {
        alert(600 * quantity);
      } else {
        let minus5 = quantity - 5;
        minus5 *= 540;
        alert(minus5 + 5 * 600);
      }
    } else if (flavor == "lava") {
      alert("per zinger burger is upto 800");

      let quantity = +prompt(
        "how many burgers you want, if you purchase more than 5 there will be 10% discount"
      );
      if (quantity <= 5) {
        alert(800 * quantity);
      } else {
        let minus5 = quantity - 5;
        minus5 *= 720;
        alert(minus5 + 5 * 800);
      }
    } else {
      alert("its not available");
    }
  }
}
else{
  alert('sorry '+menu+' is not available' )
}
