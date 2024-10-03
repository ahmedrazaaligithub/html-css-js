let todo_list = document.getElementById("todo-list")
let todo_item = document.getElementById("todo-item")

function todoAdd(){
if(todo_item.value===""){
  return disabled=true
}
let li = document.createElement("li")
let li_text = document.createTextNode(todo_item.value) //it will capitalize bcz we have use css on "ol > li"
li.appendChild(li_text)
todo_list.appendChild(li)
todo_item.value=""
// dlt btn
let dltBtn = document.createElement("button")
let dltBtnText = document.createTextNode("Deleet")
dltBtn.setAttribute("class","btn a")
dltBtn.setAttribute("onclick","deleteItem(this)")
dltBtn.appendChild(dltBtnText)
li.appendChild(dltBtn)
// edit btn
let editBtn = document.createElement("button")
let editBtnText = document.createTextNode("edit")
editBtn.setAttribute("class","btn b")
editBtn.setAttribute("onclick","editItem(this)")
editBtn.appendChild(editBtnText)
li.appendChild(editBtn)
}


function deleteItem(e){
    e.parentNode.remove()
}
function editItem(e){
 
    var editFun = prompt("Write updated value",e.parentNode.firstChild.nodeValue )
  e.parentNode.firstChild.nodeValue = editFun
  

}
function tododel(){
 todo_list .innerHTML = ""

}