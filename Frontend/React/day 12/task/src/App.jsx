
import React, { useState } from "react";

const App = () => {

  const [page, setPage] = useState("register");

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    username: "",
    password: ""
  });

  const [login, setLogin] = useState({
    username: "",
    password: ""
  });

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("loggedUser")) || null
  );

  // Register input
  const handleRegister = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  // Login input
  const handleLogin = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    });
  };

  // Register
  const registerUser = (e) => {
    e.preventDefault();

    if (!user.name || !user.email || !user.phone ||
        !user.username || !user.password) {
      alert("Fill all fields");
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration Successful");

    setUser({
      name: "",
      email: "",
      phone: "",
      username: "",
      password: ""
    });

    setPage("login");
  };

  // Login
  const loginUser = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(
      localStorage.getItem("user")
    );

    if (
      savedUser &&
      savedUser.username === login.username &&
      savedUser.password === login.password
    ) {
      setCurrentUser(savedUser);

      localStorage.setItem(
        "loggedUser",
        JSON.stringify(savedUser)
      );

      setPage("dashboard");

    } else {
      alert("Invalid Username or Password");
    }
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("loggedUser");
    setCurrentUser(null);
    setPage("login");
  };

  return (
    <div>

      <h1>User Application</h1>

      {/* REGISTER */}

      {page === "register" && (
        <div>
          <h2>Register</h2>

          <form onSubmit={registerUser}>

            <input name="name" placeholder="Name"
              value={user.name} onChange={handleRegister} />
            <br /><br />

            <input name="email" placeholder="Email"
              value={user.email} onChange={handleRegister} />
            <br /><br />

            <input name="phone" placeholder="Phone"
              value={user.phone} onChange={handleRegister} />
            <br /><br />

            <input name="username" placeholder="Username"
              value={user.username} onChange={handleRegister} />
            <br /><br />

            <input name="password" type="password"
              placeholder="Password"
              value={user.password} onChange={handleRegister} />
            <br /><br />

            <button type="submit">Register</button>

          </form>

          <button onClick={() => setPage("login")}>
            Go to Login
          </button>
        </div>
      )}

      {/* LOGIN */}

      {page === "login" && (
        <div>
          <h2>Login</h2>

          <form onSubmit={loginUser}>

            <input name="username" placeholder="Username"
              value={login.username} onChange={handleLogin} />
            <br /><br />

            <input name="password" type="password"
              placeholder="Password"
              value={login.password} onChange={handleLogin} />
            <br /><br />

            <button type="submit">Login</button>

          </form>

          <button onClick={() => setPage("register")}>
            Go to Register
          </button>
        </div>
      )}

      {/* DASHBOARD */}

      {page === "dashboard" && currentUser && (
        <div>
          <h2>Welcome {currentUser.name}!</h2>

          <p>Email: {currentUser.email}</p>
          <p>Phone: {currentUser.phone}</p>
          <p>Username: {currentUser.username}</p>

          <button onClick={logout}>Logout</button>
        </div>
      )}

    </div>
  );
};

export default App;
