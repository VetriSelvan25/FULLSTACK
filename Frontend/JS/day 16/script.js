
let employees = [];

let savedEmployees = localStorage.getItem("employees");

if (savedEmployees != null) {
    employees = JSON.parse(savedEmployees);
}

displayEmployees();

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
        id: Date.now(),
        name: name,
        age: age,
        department: department,
        salary: salary
    };
    employees.push(employee);
    localStorage.setItem("employees", JSON.stringify(employees)); 
    displayEmployees();   
    form.reset();
});

function displayEmployees() {

    let data = document.getElementById("tableData");

    data.innerHTML = "";

    employees.forEach(function(emp) {

        data.innerHTML += `
            <tr>
                <td>${emp.id}</td>
                <td>${emp.name}</td>
                <td>${emp.age}</td>
                <td>${emp.department}</td>
                <td>${emp.salary}</td>
                <td>
                    <button onclick="deleteEmployee(${emp.id})">
                        Delete
                    </button>
                </td>
            </tr>
        `;

    });

}

function deleteEmployee(id) {

    let newEmployees = [];

    employees.forEach(function(emp) {

        if (emp.id != id) {
            newEmployees.push(emp);
        }

    });

    employees = newEmployees;

    localStorage.setItem("employees", JSON.stringify(employees));

    displayEmployees();

}
