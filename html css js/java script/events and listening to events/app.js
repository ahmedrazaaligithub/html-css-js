function gettNumber(num){

   var result= document.getElementById("result")
   result.value+=(num)
   
}
function clearinput(){
   var result= document.getElementById("result")
   result.value=""

}
function getResult(){
   var result= document.getElementById("result")
cal=eval(result.value)
result.value=cal
}