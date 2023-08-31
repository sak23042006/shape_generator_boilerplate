var button=document.getElementById("button")

var numinfirst= 1
var numinlast = 0

button.onclick=()=>{

    var n = document.getElementById("number").value;
    
    var circle = document.getElementById("circle").checked

    var square = document.getElementById("square").checked

    var rectangle = document.getElementById("rectangle").checked

    var totalshapes=Number(numinlast) + Number(n)

    var box= document.getElementById("box")
    for(let i=numinfirst ; i<=totalshapes; i++)
    {
    var shape= document.createElement("div")
    shape.innerHTML =numinfirst
    numinfirst=numinfirst + 1

    if (square==true){
        shape.classList.add('square');
    }
    else if (circle==true){
        shape.classList.add('circle');
    }
    else if (rectangle==true){
        shape.classList.add('rectangle');
    }
    box.append(shape)
    numinlast=box.lastElementChild.innerHTML
    }

    
}