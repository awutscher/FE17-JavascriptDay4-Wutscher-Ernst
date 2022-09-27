

var circle = document.getElementById("circle")
    circle.addEventListener("mouseover", mouseOver)
    circle.addEventListener("mouseout", mouseOut)
    circle.addEventListener("click", grayColor)
    circle.addEventListener("dblclick", blueColor)


var messageInCircle = document.getElementById("incircle")
var messageOutCircle = document.getElementById("outcircle")


function mouseOver(){
    messageInCircle.style.opacity = 1
    messageOutCircle.style.opacity = 0
}

function mouseOut(){
    messageInCircle.style.opacity = 0
    messageOutCircle.style.opacity = 1
}

function grayColor(){
    document.body.style.backgroundColor = "gray"
}

function blueColor(){
    document.body.style.backgroundColor = "blue"
}