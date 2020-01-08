import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';
import NasaCard from './Components/NasaCard';

function App() {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=5OEsUVedFGlY1ldUSWVhkLq3hXv1rda1APz6bfRT")
      .then((res) => {
        console.log(res);
        setPhoto(res.data);
      })

      .catch((err) => {
        console.log(err);
      })
  }, []);

  console.log(photo);

  return (
    <div className="App">
      <NasaCard title={photo.title} scr={photo.url} description={photo.explanation} date={photo.date}/>
    </div>
  );
}

export default App;