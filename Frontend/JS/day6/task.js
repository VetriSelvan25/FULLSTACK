console.log("TASK-1")
let num=1
let string=""
while(num<=10)
{
 let product=num*5
   string=string+product+" "
   console.log(product)
    num++
}
 console.log(string)

 console.log("TASK-2")
 let number=2
 let str=""
 while(number<=20)
 {
    str=str+number+" "
    number+=2
 }
 console.log(str)

 console.log("TASK-3")
 let sum=0
 let start=1
 let str2=""
 while(start<=20){
    sum+=start
    if(start<20){
        str2=str2+start+"+"
    }
    else{
        str2=str2+start+"="+sum
    }
    
    start++
 }
 console.log(str2)
 
 console.log("TASK-4")
 let squares
 let i=1
 while(i<=10){
    squares=i*i
    console.log(squares)
    i++
 }

 console.log("TASK-5")
 let rev
 let j=10
 while(j>=1){
    rev=j*5
    console.log(rev)
    j--
 }