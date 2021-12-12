import React, {useState} from "react";
import axios from "axios";
import './App.css';

const rootURL = 'http://ws.audioscrobbler.com/2.0/';

function App() {
  const [username, setUsername] = useState("");
  const [period, setPeriod] = useState("overall");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePeriodChange = (event) => {
    setPeriod(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const config = { params: {
      method: 'user.gettopalbums',
      user: username,
      api_key: process.env.REACT_APP_API_KEY, // TODO: change to backend before deploy
      period,
      limit: 20,
      format: 'json' 
    }};
    const res = await axios.get(rootURL, config);
    for (let album of res.data.topalbums.album) {
      console.log(`Album: ${album.name} | Artist: ${album.artist.name} | Playcount: ${album.playcount}`);
    }
    setUsername("");
  };

  return (
    <form onSubmit={handleSubmit}>
        <label>
          Enter username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <label>
          Choose period:
          <select value={period} onChange={handlePeriodChange}>
            <option value="overall">Overall</option>
            <option value="7day">7 Days</option>
            <option value="1month">1 Month</option>
            <option value="3month">3 Months</option>
            <option value="6month">6 Months</option>
            <option value="12month">12 Months</option>
          </select>
        </label>
        <input type="submit" value="send" />
    </form>
  );
}

export default App;
