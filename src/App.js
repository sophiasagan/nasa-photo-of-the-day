import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';
import NasaCard from './Components/NasaCard';
import styled, { css } from "styled-components";
// import { Button } from "reactstrap";
// import "boostrap/dist/css/bootstrap.min.css";
import "./styles.css";
// import styled from 'styled-components';

const Button = styled.button`
  background: transparent;
  border-radius: 8px;
  border: 2px solid palegoldenrod;
  color: palevioletred;
  margin: 0 1rem;
  padding: 0.25rem 1rem;

  &:hover {
    background-color: green;
  }

  ${props =>
    props.type === "primary" &&
    css`
      background: palevioletred;
      color: white;
    `}

  ${props =>
    props.type === "secondary" &&
    css`
      background: red;
      color: yellow;
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
      <Button color="primary">Yesterday</Button>
      <Button color="secondary">Visit Nasa.Org</Button>
    </div>
  );
}

export default App;