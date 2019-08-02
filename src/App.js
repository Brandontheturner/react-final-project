import React from "react";
import "./App.css";
import SearchContainer from "./Containers/SearchContainer";
import NumberContainer from "./Containers/NumberContainer";

function App() {
  return (
    <div className='App'>
      <h1>Final Project</h1>
      <SearchContainer />
      <NumberContainer />
    </div>
  );
}

export default App;
