
document.getElementById("submitbutton").addEventListener("click", printname);

var fname = 0
var lname = 0


function printname(){
    event.preventDefault()
    var fname = document.getElementById("fname").value
    var lname = document.getElementById("lname").value
    outputfname.innerText = `${fname} `
    if (fname.length < 5){
        outputfname.style.color = "red"
    }
    else{
        outputfname.style.color = "green"
    }
    outputlname.innerText = `${lname}`
    if (lname.length < 5){
        outputlname.style.color = "red"
    }
    else{
        outputlname.style.color = "green"
    }
    var it = document.getElementById("it").checked
    var hospitality = document.getElementById("hospitality").checked
    var output = document.getElementById("endsentence")
    var outputdiv = document.getElementById("displayoutput")
    if(it == true){
        output.innerText =  ` and i work in IT`
        outputdiv.style.backgroundColor = "purple"
    }
    else if(hospitality == true){
        output.innerText = ` and i work in Hopitality`
        outputdiv.style.backgroundColor = "yellow"
    }
    else {
        output.innerText = ` and i have no job`

    }
    
}