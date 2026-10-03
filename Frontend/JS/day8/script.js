console.log("TASK-1")
const checkEvenOdd=(number)=>{
    if(number%2===0){
        return "Even Number"
    } else {
        return "Odd Number"
    }
}
console.log(checkEvenOdd(10))

console.log("TASK-2")
const checkLargest=(num1,num2)=>{
    if(num1>num2){
        return num1
    }
    else{
        return num2
    }
}
console.log("Greatest number is:" + checkLargest(25,40))

console.log("TASK-3")

const voteEligibility=(age)=>{
    if(age>=18){
        return "Eligibile to Vote"
    }
    else{
        return "Not Eligible to Vote"
    }
}
console.log(voteEligibility(20))

console.log("TASK-4")
const getTotal=(numbers)=>{
    let total =0
    for(let i=0;i<numbers.length;i++){
        total+=numbers[i]
    }
    return total
}
 let array=[10,20,30,40,50]
 console.log("The Total is : " + getTotal(array))

 console.log("TASK-5")
 const even=[10,15,20,25,30,35,40]
 const countEvenNumbers=(numb)=>{
    let count=0
   for(let i=0;i<even.length;i++){
    if(numb[i]%2===0){
        count++
    }
   }
   return count
 }
 console.log("The Count Of Even Numbers is : " +countEvenNumbers(even))