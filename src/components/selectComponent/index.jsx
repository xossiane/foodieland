import React, { useState } from "react";

import "./SelectComponent.css";
function selectComponent(props) {
  const [enteredSelect, setEnteredSelect] = useState();
  const list = [
    { id: 1, name: "select 1" },
    { id: 2, name: "select 2" },
    { id: 3, name: "select 3" },
    { id: 4, name: "select 4" },
  ];
  const selectHandler = (event) => {
    event.preventDefault();
    setEnteredSelect(event.target.value);
    props.onTextChange(event);
  };

  return (
    <div>
      <h6>{props.title}</h6>
      <select
        className="selectContainer"
        value={enteredSelect}
        placeholder={props.placeholder}
        onChange={selectHandler}
      >
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
