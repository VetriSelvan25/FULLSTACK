console.log("TASK-1")
let arr=["Apple","banana","Cherry","Watermelon","Mango"]
console.log(arr)
console.log(arr[0])
console.log(arr[2])
console.log(arr[4])

console.log("TASK-2")
let colors = ["Red", "Blue", "Green", "Yellow"];
colors[1]="black"
console.log(colors)

console.log("TASK-3")
let students=["Arun","Kumar","Priya","Ravi","Divya"]
for(let init=0;init<arr.length;init++){
    console.log(students[init])
}
console.log("TASK-4")
let marks=[80, 70, 90, 60, 85]
let sum=0
for(let i=0;i<marks.length;i++){
    sum=sum+marks[i]
}
console.log(sum)

console.log("TASK-5")
let numbers = [2, 4, 6, 8, 10];
for(let j=0;j<numbers.length;j++){
    numbers[j]=numbers[j]*2
}
console.log(numbers)

console.log("TASK-6")
let obj={name:"Vetri",age:"24",course:"Full Stack",city:"Chennai"}
console.log(obj.name)
console.log(obj.course)

console.log("TASK-7")
let employee={name:"Arun",salary:"25000",role:"Developer"}
employee.salary=30000
console.log(employee)

console.log("TASK-8")
let product={name:"Laptop",price:"50000"}
product.brand="Dell"
console.log(product)

console.log("TASK-9")
let car={brand:"Toyota",model:"Fortuner",year:2025}
for(let key in car){
    console.log(key,car[key])
}

console.log("TASK-10")
let student=[
    {
        name:"Arun",
        mark:80
    },
    {
        name:"Priya",
        mark: 90
    },
    {

        name:"Kumar",
        mark:75
    }

]
// for(let i=0;i<student.length;i++){
//     console.log(student[i].name +"-"+student[i].mark)
// }

// for(let student of student){
//     for(let key in student){
//         console.log(key+"-"+student[key])
//     }
// }

for (let students of student) {
    console.log(students.name + " - " + students.mark);
}