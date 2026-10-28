
let employees = [];

let form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let age = document.getElementById("age").value;
    let department = document.getElementById("department").value.trim();
    let salary = document.getElementById("salary").value;

    if (name == "" || age == "" ||
        department == "" || salary == "") {

        alert("Please fill all fields");
        return;
    }

    age = Number(age);
    salary = Number(salary);

    if (age <= 0 || !Number.isInteger(age) ||
        salary <= 0 || !Number.isFinite(salary)) {

        alert("Enter valid positive age and salary");
        return;
    }

    let employee = {
        name: name,
        age: age,
        department: department,
        salary: salary
    };

    employees.push(employee);

    let data = document.getElementById("tableData");

    data.innerHTML = "";

    employees.forEach(function(emp) {

        data.innerHTML += `
            <tr>
                <td>${emp.name}</td>
                <td>${emp.age}</td>
                <td>${emp.department}</td>
                <td>${emp.salary}</td>
            </tr>
        `;

    });

    form.reset();

});
