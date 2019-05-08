import React from 'react';
import logo from './logo.svg';
import './App.css';
import Info from './components/info/Info';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <h1>Anssif</h1>
      <h3>Welcome to my home page.</h3>
      <Info />
      <Contact />
    </div>
  );
}

export default App;
