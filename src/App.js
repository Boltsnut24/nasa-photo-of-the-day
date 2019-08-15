import React, { useState, useEffect } from "react";
import PhotoCard from './PhotoCard.js'
import axios from 'axios'
import "./App.css";
import styled from 'styled-components'
import LeftButton from "./LeftButton.js";
import RightButton from "./RightButton.js";

const Header = styled.h2`
   color: purple;
   height: 40px;
   background-color: lightgrey;
   margin-top: 0px;
`;

function App() {

  const [dataset, setDataset] = useState({});
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=ylTXo3afm0F48HuOGHXymi9HYMrvlzJ7TY1Qu1Po`)
      .then(res => {
        console.log(res.data);
        setDataset(res.data);
      });
  }, []);

  return (
    <div className="App">
      <Header>NASA's Astronomy Photo Of The Day </Header>
      <LeftButton/>
      <PhotoCard date={dataset.date} explanation={dataset.explanation} 
                 title={dataset.title} url={dataset.url}/>
      <RightButton/>
    </div>
  );
}


export default App;
