import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";

function App() {
  axios
    .get('http://api.nasan.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
      console.log(res.data);
    });


return (
  <div className="App">
    <p>
      Read through the instructions in the README.md file to build your NASA
      app! Have fun 🚀!
      </p>
  </div>
);


export default App;
