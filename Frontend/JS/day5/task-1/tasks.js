console.log("TASK-1")
let a=10
let b=20
console.log("Simple calculator")
console.log("Addition : " +( a + b))
console.log("Subtraction: "+ (a-b))
console.log("Multiplication : "+ a*b)
console.log("Division : "+ a/b)
console.log("Modulus : "+ a%b)

console.log("TASK-2")
let num=15
if(num%2===0)
    console.log("Even")
else
    console.log("Odd")

console.log("TASK-3")
let number=10
if(number>0)
    console.log("Positive")
else if(number<0)
    console.log("Negative")
else
    console.log("Zero")

console.log("TASK-4")
let age=20
if(age>=18)
    console.log("Eligible to vote")
else
    console.log("Not eligible to vote")

console.log("TASK-5")
let num1=40;
let num2=25;
if(num1>num2)
    console.log("num1 is largest")
else
    console.log("num2 is largest")

console.log("TASK-6")
let marks=75
if(marks>=90)
    console.log("Grade-A")
else if(marks>=75 && marks<90)
    console.log("Grade-B")
else if(marks>=50 && marks<75)
    console.log("Grade-C")
else
    console.log("fail")

console.log("TASK-7")
console.log("Num from 1 to 20")
for(let number=1;number<=20;console.log(number),number++);

console.log("TASK-8")
for(let Num=1;Num<=50;Num++)
{
    if(Num%2===0){
        console.log(Num)
    }
}

console.log("TASK-9")
let firstNum=5
for(let product=1;product<=10;product++){
    let multiple=firstNum*product
    console.log(multiple)
}
console.log("TASK-10")
let sum=0
for(let add=1;add<=10;add++){
sum+=add
}
console.log(sum)