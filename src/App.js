import React from 'react';
import logo from './logo.svg';
import './App.css';

function Title(props){
  return (
  <div>
    <h3>{props.text}</h3>
    <p>{props.subtext}</p>
  </div>)
}

function App() {
  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <Title text="Some value" subtext="some string"/>
      <Title text="1 value"/>
      <Title text="2 value"/>
    </div>
  );
}

export default App;
