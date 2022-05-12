import React, { useState } from "react";
import "./TextAreaComponent.css";

function selectComponent(props) {
  const [enteredTextArea, setEnteredTextArea] = useState();

  const textAreaHandler = (event) => {
    event.preventDefault();
    setEnteredTextArea(event.target.value);
    props.onTextChange(event);
  };

  return (
    <div className="containerInput">
      <h6>{props.title}</h6>
      <textarea
        className="textAreaContainer"
        placeholder={props.placeholder}
        value={enteredTextArea}
        onChange={textAreaHandler}
        name={props.name}
      />
    </div>
  );
}

export default selectComponent;
