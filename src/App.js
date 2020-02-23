import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppWeather from "./AppWeather";

function App() {
  return (
    <div>
      <AppWeather />
      <p class="source"> 
        <a href="https://github.com/dian1p/my-app" target="blank">Open Source Code </a>
         by Dian
      </p>
    </div>
  );
}

export default App;
