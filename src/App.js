import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';
import NasaCard from './Components/NasaCard';
import styled, { css } from "styled-components";
// import { Button } from "reactstrap";
// import "boostrap/dist/css/bootstrap.min.css";
import "./styles.css";
// import styled from 'styled-components';

const Button = styled.a`
  background: white;
  border-radius: 4px;
  border: 1px solid white;
  color: white;
  text-decoration: none;
  margin: 5rem 0 0 .5rem;
  padding: 0.2rem 1rem;
  text-shadow: 1px 1px 5px black, 0 0 25px blue, 0 0 10px darkblue;

  &:hover {
    background-color: purple;
  }

  ${props =>
    props.type === "primary" &&
    css`
      background: white;
      color: white;
    `}

  ${props =>
    props.type === "secondary" &&
    css`
      background: white;
      color: blue;
    `}
`;


function App() {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=pNeCXZNd11n4j6gyMxZstTIWhZLRciOqm4LSiDxy")
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
      <Button 
      color="primary" 
      href="https://apod.nasa.gov/apod/archivepix.html"
      target="_blank"
      rel="noopener">Archive</Button>
      <Button 
      color="secondary"
      href="https://www.nasa.gov/"
      target="_blank"
      rel="noopener">Visit Nasa.Gov</Button>
    </div>
  );
}

export default App;