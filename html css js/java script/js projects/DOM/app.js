var cont = document.getElementById('container')



function makeBoxes(){
    let div = document.createElement('div')
    
    let img = document.createElement('img')
    div.className='child'
    img.src='https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
    img.className='img'  
    div.appendChild(img)
    let h3 = document.createElement("h3")
    h3.innerHTML='this is javascript div'
    div.appendChild(h3)
    cont.appendChild(div)
    // console.log(cont)
    // let random =Math.round( Math.random()*6)
    // console.log(random)
    // let color = ['red','green','blue','black','pink','orange']
    // div.style.backgroundColor=color[random]

}
function colorChange() {
    let change = cont.getElementsByClassName("child");
    
    for (var i = 0; i < change.length; i++) {
      change[i].style.backgroundColor = "#ff0000"; // Replace with desired color
    }
  }