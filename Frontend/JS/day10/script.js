console.log("TASK 1")
let salary =20000
salary=25000
console.log(salary)

console.log("TASK 2")

const country="India"
console.log("My Country is "+country)

console.log("TASK 3")
let name ="Arun"
let age=25
console.log(`My name is ${name} and I am ${age} old`)

console.log("TASk 4")
let price=500
let quantity=4
console.log(`Total price = ${price*quantity}`)

console.log("TASK 5")
const greet=(name="Guest")=>{
    console.log(`Welcome ${name}`)
}

greet("Arun")
greet()

console.log("TASK 6")
const colors=["Red","Green","Blue"]
const [first,second,third]=colors
console.log(first)
console.log(second)
console.log(third)

console.log("TASK 7")

const student={
    name:"Arun",
    age:20,
    city:"Chennai"
}
const {name:name1 ,age:age1,city:city1}=student
console.log(name1)
console.log(age1)
console.log(city1)

console.log("TASK 8")
const num=[10,20,30]
const newnum=[...num,40,50]
console.log(newnum)

console.log("TASK 9")
function showNumbers(...numbers){
    console.log(numbers)
}
showNumbers(10,20,30,40)

console.log("TASK 10")

const add=(a,b)=>{
    return a+b
}
console.log(add(10,20))