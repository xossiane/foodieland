import React, { useState } from "react";

import InputComponent from "../ContactInput";
import SelectComponent from "../ContactSelect";
import TextAreaComponent from "../ContactTextArea";

import Cheffok from "../../../../../public/assets/cheff-ok.png";
import "./FormularioComponent.css";

const initialState = {
  name: "",
  email: "",
  subject: "",
  select: "",
  message: "",
};

function Formulario() {
  var [dadosState, setDadosState] = useState(initialState);

  function handleChange(event) {
    const value = event.target.value;
    setDadosState({
      ...dadosState,
      [event.target.name]: value,
    });
  }
  function verificarCampos() {
    if (
      dadosState.name.length > 0 &&
      dadosState.email.length > 0 &&
      dadosState.subject.length > 0 &&
      dadosState.select.length > 0
    ) {
      alert("Dados enviados");
      return true;
    } else {
      alert("Campos vazios");
      console.log(dadosState);
      return false;
    }
  }
  const submiteHandler = (event) => {
    event.preventDefault();
    if (verificarCampos()) {
      setDadosState({ ...initialState });
    }
  };

  return (
    <form className="form-container" onSubmit={submiteHandler}>
      <h1 className="form-container__titulo">Contact us</h1>
      <div className="teste">
        <div className="form-container--fundo">
          <img className="form-container--fundo__img" src={Cheffok} />
        </div>
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
          value={dadosState.subject}
          onTextChange={handleChange}
        />

        <TextAreaComponent
          title="MESSAGES"
          name="message"
          value={dadosState.message}
          placeholder="Enter your messages..."
          onTextChange={handleChange}
        />
        <button className="form-container__button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default Formulario;
