import React, {useState} from "react";
import axios from "axios";
import Form from "./Form";
import ImageList from "./ImageList"
import './App.css';

const rootURL = 'http://ws.audioscrobbler.com/2.0/';

function App() {
  const [imageList, setImageList] = useState([]);

  const updateImages = async (username, period, gridSize) => {
    const limit = parseInt(gridSize);
    const config = { params: {
      method: 'user.gettopalbums',
      user: username,
      api_key: process.env.REACT_APP_API_KEY, // TODO: change to backend before deploy
      period,
      limit,
      format: 'json' 
    }};
    const res = await axios.get(rootURL, config);
    let currentImageList = [];
    for (let album of res.data.topalbums.album) {
      currentImageList.push(album.image[3]['#text']);
      //console.log(`Album: ${album.name} | Artist: ${album.artist.name} | Playcount: ${album.playcount}`);
    }
    setImageList(currentImageList);
  };

  return (
    <>
      <Form updateImages={updateImages} />
      <ImageList imageList={imageList} />
    </>
  );
}

export default App;
