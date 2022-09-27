
var santatop = document.getElementById("santatop").addEventListener("click", disappear)
var santamid = document.getElementById("santamid").addEventListener("click", disappear)
var santabotright = document.getElementById("santabotright").addEventListener("click", disappear)
var santabotleft = document.getElementById("santabotleft").addEventListener("click", disappear)



function disappear(){
    this.style.opacity = "0"
    this.style.transition = "1s ease-in-out";
    bgColor()
}


function bgColor(){
    var n1 = (Math.random()*255)
    var n2 = (Math.random()*255)
    var n3 = (Math.random()*255)
    document.body.style.backgroundColor = `rgb(${n1},${n2},${n3})`
}