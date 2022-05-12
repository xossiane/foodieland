import React, { useState } from "react";

import "./SelectComponent.css";
function selectComponent(props) {
  const [enteredSelect, setEnteredSelect] = useState();
  const list = [
    { id: 1, name: "Opção 1" },
    { id: 2, name: "Opção 2" },
    { id: 3, name: "Opção 3" },
    { id: 4, name: "Opção 4" },
  ];
  const selectHandler = (event) => {
    event.preventDefault();
    console.log(enteredSelect);
    setEnteredSelect(event.target.value);
    props.onTextChange(event);
  };

  return (
    <div className="containerInput">
      <h6>{props.title}</h6>
      <select
        className="selectContainer"
        value={enteredSelect}
        placeholder={props.placeholder}
        onChange={selectHandler}
      >
        <option value="" disabled selected></option>
        {list.map((item, index) => (
          <option key={item.id} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default selectComponent;
