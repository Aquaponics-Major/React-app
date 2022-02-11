import React from "react";
import "./App.css";

import TodoList from "./components/FetchValues";
import Title from "./components/Title";

function App() {
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;



// https://www.youtube.com/watch?v=OlyA7Q0qPPE
// https://github.com/hannah-gkim/firebase-crud-todoList