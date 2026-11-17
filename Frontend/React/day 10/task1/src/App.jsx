
import React, { useState } from "react";

const App = () => {

  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedName(name);
  };

  return (
    <div>
      <h2>Student Form</h2>

      <form onSubmit={handleSubmit}>

        <label>Student Name: </label>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>

      </form>

      <h3>Entered Name: {submittedName}</h3>

    </div>
  );
};

export default App;
