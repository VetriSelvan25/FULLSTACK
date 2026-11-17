
import React, { useState, useEffect } from "react";

const App = () => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    username: ""
  });

  const [users, setUsers] = useState([]);

  // GET - Fetch users
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error));
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  // POST - Register user
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.name || !user.email || !user.phone || !user.username) {
      alert("Please fill all fields");
      return;
    }

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(data => {
        setUsers([...users, data]);

        setUser({
          name: "",
          email: "",
          phone: "",
          username: ""
        });

        alert("User Registered Successfully!");
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h1>User Registration</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={user.name}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={user.email}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="phone"
          placeholder="Enter Phone Number"
          value={user.phone}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          value={user.username}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">Register</button>

      </form>

      <h2>Registered Users</h2>

      <table border="1" cellPadding="10">

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Username</th>
          </tr>
        </thead>

        <tbody>
          {users.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.username}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
};

export default App;
