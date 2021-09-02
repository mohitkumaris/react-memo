import React from "react";
import "./App.css";
import SimpleComponent from "./components/SimpleComponent";
import UseReducerComponent from "./components/UseReducerComponent";

function App() {
  return (
    <div className="App">
      <SimpleComponent />
      <hr />
      <UseReducerComponent />
    </div>
  );
}

export default App;
