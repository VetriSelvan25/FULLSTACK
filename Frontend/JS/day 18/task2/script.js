

function calculateSalary(salary, callback) {
    callback(salary);
}

let addBonus = (salary) => {
    let result = salary + 5000;

    document.getElementById("result").innerHTML +=
        "Salary After Bonus: " + result + "<br>";
};

let deductSalary = (salary) => {
    let result = salary - 2000;

    document.getElementById("result").innerHTML +=
        "Salary After Deduction: " + result + "<br>";
};

function calculate() {
    let salary = Number(document.getElementById("salary").value);

    document.getElementById("result").innerHTML =
        "Original Salary: " + salary + "<br>";

    calculateSalary(salary, addBonus);
    calculateSalary(salary, deductSalary);
}
