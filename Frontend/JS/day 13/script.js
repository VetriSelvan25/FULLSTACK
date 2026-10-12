console.log("TASK-1")

let heading=document.getElementById("h1")
let btn=document.getElementById("btn")
btn.addEventListener("click",()=>{
    heading.style.color="red"
    heading.style.fontSize= "30px"
})

console.log("TASK-2")
let Div=document.getElementById("Div")
let btn1 =document.getElementById("btn1")
let btn2 =document.getElementById("btn2")
btn1.addEventListener("click",()=>{
    Div.style.backgroundColor="blue"
    Div.style.color="white"
})
btn2.addEventListener("click",()=>{
    Div.style.backgroundColor="yellow"
    Div.style.color="red"
})

console.log("TasK-3")
let Div2=document.getElementById("Div2")
let para=document.getElementById("para")
let Hide=document.getElementById("hide")
let Show=document.getElementById("show")
Hide.addEventListener("click",()=>{
    para.style.display="none"
})
Show.addEventListener("click",()=>{
    para.style.display="block"
})

console.log("TASK-4")
let para4=document.getElementById("para4")
let toggle=document.getElementById("toggle")
let visible="true"
toggle.addEventListener("click",()=>{
    if(visible){
        para4.style.display="none"
        visible=false
    }
    else{
        para4.style.display="block"
        visible=true
    }
})

console.log("TASK-5")
let para5=document.getElementById("para5")
let togglebtn=document.getElementById("togglebtn")
togglebtn.addEventListener("click",()=>{
    document.body.classList.toggle("dark")
})