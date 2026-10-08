console.log("TASK 1")
let numbers=[10,20,30,40,50]
for(let i=0;i<numbers.length;i++){
numbers[i]=numbers[i]*2
}

console.log(numbers)

console.log("TASK 2")
let num=[10,15,20,25,30,35,40,45,50]
let evenNumbers=num.filter((num)=>num%2===0)
console.log(evenNumbers)

console.log("TASK 3")
let numbers1 = [10, 25, 35, 50, 60];

let firstNumber = numbers1.find(function(num) {
    return num > 30;
});

console.log(firstNumber);



console.log("TASK 4")
let students = [
    { id: 1, name: "Arun", mark: 75 },
    { id: 2, name: "Priya", mark: 90 },
    { id: 3, name: "Kumar", mark: 65 }
];

let student = students.find(function(student) {
    return student.id === 2;
});

console.log(student);


console.log("TASK 5")
let employees = [
    { name: "Arun", salary: 25000 },
    { name: "Priya", salary: 45000 },
    { name: "Kumar", salary: 30000 },
    { name: "Ravi", salary: 50000 }
];

let filteredEmployees = employees.filter(function(employee) {
    return employee.salary >= 30000;
});

console.log(filteredEmployees);



console.log("TASK 6")
let employeeNames = employees.map(function(employee) {
    return employee.name;
});

console.log(employeeNames);



console.log("TASK 7")
let prices = [100, 200, 300, 400];

let total = prices.reduce(function(sum, price) {
    return sum + price;
}, 0);

console.log(total);

console.log("TASK 8")
let marks = [75, 80, 35, 90, 65];

// 1. Is there at least one mark below 40?
let hasBelow40 = marks.some(function(mark) {
    return mark < 40;
});

console.log("Is there a mark below 40?", hasBelow40);


// 2. Are all marks 35 or above?
let allAbove35 = marks.every(function(mark) {
    return mark >= 35;
});

console.log("Are all marks 35 or above?", allAbove35);


console.log("TASK 9")
let skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
];

for (let skill of skills) {
    console.log(skill);
}

console.log("TASK 10")
let studentDetails = {
    name: "Arun",
    age: 21,
    course: "JavaScript",
    city: "Chennai"
};

for (let key in studentDetails) {
    console.log(key, studentDetails[key]);
}