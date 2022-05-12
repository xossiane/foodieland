import React, { useState } from "react";

import InputComponent from "../input-component";
import SelectComponent from "../selectComponent";
import TextAreaComponent from "../textArea-component";

import "./FormularioComponent.css";

function Formulario() {
  var [dadosState, setDadosState] = useState({
    name: "",
    email: "",
    subject: "",
    select: "",
    message: "",
  });

  function handleChange(event) {
    const value = event.target.value;
    setDadosState({
      ...dadosState,
      [event.target.name]: value,
    });
    console.log(dadosState);
  }
  function teste() {
    if (
      dadosState.name.length > 0 &&
      dadosState.email.length > 0 &&
      dadosState.subject.length > 0 &&
      dadosState.select.length > 0
    ) {
      alert("Dados enviados");
    } else alert("Campos vazios");
  }
  const submiteHandler = (event) => {
    setDadosState({
      name: "",
      email: "",
      subject: "",
      select: "",
      message: "",
    });
    event.preventDefault();
  };

  return (
    <form className="container" onSubmit={submiteHandler}>
      <h1>Contact us</h1>
      <InputComponent
        type="text"
        placeholder="Enter your name..."
        title="NAME"
        name="name"
        value={dadosState.name}
        onTextChange={handleChange}
      />
      <InputComponent
        type="email"
        placeholder="Your email address..."
        title="EMAIL ADDRESS"
        name="email"
        value={dadosState.email}
        onTextChange={handleChange}
      />
      <SelectComponent
        title="ENQUIRY TYPE"
        name="select"
        value={dadosState.select}
        placeholder="Advertising"
        onTextChange={handleChange}
      />
      <InputComponent
        type="text"
        placeholder="Enter subject"
        title="SUBJECT"
        name="subject"
        value={dadosState.email}
        onTextChange={handleChange}
      />

      <TextAreaComponent
        title="MESSAGES"
        name="message"
        value={dadosState.message}
        placeholder="Enter your messages..."
        onTextChange={handleChange}
      />
      <button onClick={teste}>Submit</button>
    </form>
  );
}

export default Formulario;
