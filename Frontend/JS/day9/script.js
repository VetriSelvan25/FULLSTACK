console.log("TASK-1")

let company="ABC Technologies"
function showEmployee(){
    let employee ="Arun"
    console.log(company)
    console.log(employee)
}
//console.log(employee) -->it will give error because employee is defined inside the function and cannot be accessed outside the function
showEmployee()
console.log("TASK-2")
//Accessing let variables inside and outside the if block 
if (true) {
    let age = 25;
    const city = "Chennai";
    console.log(age)
    console.log(city)
}
 //   console.log(age) it will give error because age is defined inside the if block and cannot be accessed outside the if block

//Accessing var variables inside and outside the if block 
if (true) {
    var age1 = 15;
    const city = "Chennai";
    console.log(age1)
    console.log(city)
}
    console.log(age1)
      
console.log("TASK-3")
console.log(var1)
var var1="Hello"

//console.log(var2)  -->it will show an error because var2 is declared after the console.log statement and can't be accessed before its declaration
let var2="Hello"

greet()

function greet(){
    console.log("Welcome Javascript")
}

console.log("TASK-4")
function createCounter(){
    let count=0
    function inner(){
        count++
        console.log(count)
    }
    return inner
}
const total=createCounter()
total()
total()
total()



console.log("TASK-5")
function add(a,b){
    console.log(a+b)
}
function subtract(a,b){
    console.log(a-b)
}
function calculate(a,b,callback){
    callback(a,b)
}

calculate(20,10,add)
calculate(20,10,subtract)




















