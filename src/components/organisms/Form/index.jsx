import React, { useState } from "react";

import Cheffok from "/assets/cheff-ok.png";
import "./FormularioComponent.scss";

import { ContactInput, ContactSelect, ContactTextArea } from "../../atoms";

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
      dadosState.name.trim().length > 0 &&
      dadosState.email.trim().length > 0 &&
      dadosState.subject.trim().length > 0 &&
      dadosState.select.trim().length > 0
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
    <section>
      <h1 className="form__title">Contact us</h1>
      <form className="form" onSubmit={submiteHandler}>
        <div className="form-container">
          <div className="form-container__containerImg">
            <img className="containerImg__img" src={Cheffok} />
          </div>
          <div className="form__input">
            <ContactInput
              className="input-container__input"
              type="text"
              placeholder="Enter your name..."
              title="NAME"
              name="name"
              value={dadosState.name}
              onTextChange={handleChange}
            />
            <ContactInput
              className="input-container__input"
              type="email"
              placeholder="Your email address..."
              title="EMAIL ADDRESS"
              name="email"
              value={dadosState.email}
              onTextChange={handleChange}
            />
            <ContactSelect
              title="ENQUIRY TYPE"
              name="select"
              value={dadosState.select}
              placeholder="Advertising"
              onTextChange={handleChange}
            />
            <ContactInput
              className="input-container__input"
              type="text"
              placeholder="Enter subject"
              title="SUBJECT"
              name="subject"
              value={dadosState.subject}
              onTextChange={handleChange}
            />

            <ContactTextArea
              title="MESSAGES"
              name="message"
              value={dadosState.message}
              placeholder="Enter your messages..."
              onTextChange={handleChange}
            />
            <button className="form__button" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Formulario;
