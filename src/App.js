import React from "react";
import "./App.css";
// import ToggleSwitch from "./components/ToggleSwitch/ToggleSwitch";
import FetchValues from "./components/FetchValues";

function App() {
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <FetchValues />
          {/* <ToggleSwitch label = "Feeder Active"/> */}
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;


