import React, { useState } from "react";

import "./InputComponent.css";

function InputComponent(props) {
  const [enteredName, setEnteredName] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
    event.preventDefault();
    props.onTextChange(event);
  };

  return (
    <div>
      <h6>{props.title}</h6>
      <input
        className="inputContainer"
        type={props.type}
        value={enteredName}
        onChange={nameChangeHandler}
        placeholder={props.placeholder}
        name={props.name}
      />
    </div>
  );
}

export default InputComponent;
