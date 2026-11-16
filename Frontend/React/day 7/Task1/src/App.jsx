
import React, { useState } from 'react';

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <h2>
        {isLoggedIn ? "Welcome User" : "Please Login"}
      </h2>

      <button onClick={handleLogin}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default App;
