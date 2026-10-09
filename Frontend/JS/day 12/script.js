console.log("TASK 1")

document.getElementById("title").textContent="Welcome to Javascript"

let title=document.getElementById("title")
title.style.color="blue"
title.style.fontSize="30px"

console.log("TASK 2")

let para=document.getElementsByClassName("text")
para[0].style.color="red"
para[1].style.backgroundColor="yellow"
para[2].style.fontSize="25px"


console.log("TASK 3")

let imgs=document.querySelector("#image")
imgs.src="imagesforuse/2.jpg"
imgs.style.width="300px"

let achr=document.querySelector(".anchor")
achr.href="https://www.google.com"
achr.textContent="Visit Google"


console.log("TASK 4")
let username=document.getElementById("username")
username.value="Arun"

let email=document.querySelector("#email")
email.value="arun@gmail.com"

username.style.backgroundColor="yellow"

let btn=document.getElementById("btn")
btn.disabled=true

console.log("TASK 5")
let heading=document.querySelectorAll(".five")
heading[0].textContent="HTML"
heading[1].textContent="CSS"
heading[2].textContent="JAVASCRIPT"
heading[3].textContent="REACT"
heading[4].textContent="Node.js"

heading[0].style.color="orange"
heading[1].style.color="blue"
heading[2].style.color="green"
heading[3].style.color="red"
heading[4].style.color="Violet"