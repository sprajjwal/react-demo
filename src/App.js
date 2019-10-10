import React from 'react';
import './App.css';
import PageHeader from './PageHeader'

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
      <PageHeader/>
    </div>
  );
}

export default App;
