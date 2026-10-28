
let registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let name = document.getElementById("regName").value.trim();
        let email = document.getElementById("regEmail").value.trim();
        let password = document.getElementById("regPassword").value;

        if (name == "" || email == "" || password == "") {
            alert("Please fill all fields");
            return;
        }

        let user = {
            name: name,
            email: email,
            password: password
        };

        localStorage.setItem("user", JSON.stringify(user));

        alert("Registration successful!");

        window.location.href = "login.html";

    });

}

let loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let email = document.getElementById("loginEmail").value.trim();
        let password = document.getElementById("loginPassword").value;

        let savedUser = localStorage.getItem("user");

        if (savedUser == null) {
            alert("Please register first");
            return;
        }

        let user = JSON.parse(savedUser);

        if (email == user.email && password == user.password) {

            localStorage.setItem("loggedIn", "true");

            window.location.href = "dashboard.html";

        } else {

            alert("Invalid email or password");

        }

    });

}

if (window.location.pathname.endsWith("dashboard.html")) {

    let loggedIn = localStorage.getItem("loggedIn");
    let savedUser = localStorage.getItem("user");

    if (loggedIn != "true" || savedUser == null) {

        window.location.href = "login.html";

    } else {

        let user = JSON.parse(savedUser);

        document.getElementById("welcome").innerHTML =
            "Hello, " + user.name;

    }

}

let logoutButton = document.getElementById("logout");

if (logoutButton) {

    logoutButton.addEventListener("click", function() {

        localStorage.removeItem("loggedIn");

        window.location.href = "login.html";

    });

}
