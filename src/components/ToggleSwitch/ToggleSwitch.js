import React, { useState } from "react";

import "./ToggleSwitch.css";
import firebase from "../../util/firebase"



export default function ToggleSwitch({ todo }) {
  
    const [newTitle, setNewTitle] = useState("");
  
    const deleteTodo = () => {
      const todoRef = firebase.database().ref("Todo").child(todo.id);
      todoRef.remove();
    };
    const completeTodo = () => {
      const todoRef = firebase.database().ref("Todo").child(todo.id);
      todoRef.update({
        complete: !todo.complete,
      });
    };
  
    const editTodo = () => {
      const todoRef = firebase.database().ref("Todo").child(todo.id);
      todoRef.update({
        title: newTitle,
      });
    };
    const handleChange = (e) => {
      //e.preventDefault();
      if (todo.complete === true) {
        setNewTitle(todo.title);
      } else {
        todo.title = "";
        setNewTitle(e.target.value);
      }
    };

const ToggleSwitch = ({ label }) => {
return (
	<div className="container">
	{label}{" "}
	<div className="toggle-switch">
		<input type="checkbox" className="checkbox"
			name={label} id={label} />
		<label className="label" htmlFor={label}>
		<span className="inner" />
		<span className="switch" />
		</label>
	</div>
	</div>
);
};
};
// export default ToggleSwitch;
