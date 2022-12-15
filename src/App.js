import React from "react";
import "./App.css";
import List from "./List";
import logo from './For_dummies.png';
import dont_know from './dont_know.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} alt="piechart" height="300px" width="300px"></img>
       <List />
       <img src={dont_know} alt="piechart" height="300px" width="300px"></img>
      </header>
    </div>
  );
}

export default App;
