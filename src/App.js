import React, { useState, useEffect } from "react";
import PhotoCard from './PhotoCard.js'
import axios from 'axios'
import "./App.css";

function App() {
  const [dataset, setDataset] = useState('');
  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=ylTXo3afm0F48HuOGHXymi9HYMrvlzJ7TY1Qu1Po')
      .then(res => {
        console.log(res.data);
        setDataset(res.data);
      });
  }, []);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <PhotoCard date={dataset.date} explanation={dataset.explanation} 
                 title={dataset.title} url={dataset.url}/>
    </div>
  );
}


export default App;
