
import React, { useState } from "react";

const App = () => {

  const [student, setStudent] = useState({
    name: "",
    email: "",
    age: ""
  });

  const [submitted, setSubmitted] = useState(false);

  // Common handleChange function
  const handleChange = (event) => {
    setStudent({
      ...student,
      [event.target.name]: event.target.value
    });
  };

  // Form submit function
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h2>Student Registration Form</h2>

      <form onSubmit={handleSubmit}>

        <label>Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={student.name}
          onChange={handleChange}
        />

        <br /><br />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={student.email}
          onChange={handleChange}
        />

        <br /><br />

        <label>Age:</label>
        <input
          type="number"
          name="age"
          placeholder="Enter your age"
          value={student.age}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">Register</button>

      </form>

      {submitted && (
        <div>
          <h2>Student Details</h2>

          <p>Name: {student.name}</p>
          <p>Email: {student.email}</p>
          <p>Age: {student.age}</p>
        </div>
      )}

    </div>
  );
};

export default App;
