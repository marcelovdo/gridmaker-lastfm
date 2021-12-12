import React, {useState} from "react";
import './App.css';

function App() {
  const [username, setUsername] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`username sent: ${username}`);
  };

  return (
    <form onSubmit={handleSubmit}>
        <label>
          Enter username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <input type="submit" value="send" />
    </form>
  );
}

export default App;
