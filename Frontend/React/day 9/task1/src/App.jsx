
import React, { useState } from "react";

const App = () => {

  const [name, setName] = useState("Arun");

  const changeName = () => {
    setName("Kumar");
  };

  return (
    <div>
      <h2>Student Name: {name}</h2>

      <button onClick={changeName}>
        Change Name
      </button>
    </div>
  );
};

export default App;
