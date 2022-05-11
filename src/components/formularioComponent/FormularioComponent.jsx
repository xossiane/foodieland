import React, { useState } from "react";
import InputComponent from "../input-component/InputComponent";
function Formulario() {
  var [dadosState, setDadosState] = useState({
    name: "",
    email: "",
  });

  function handleChange(event) {
    const value = event.target.value;
    setDadosState({
      ...dadosState,
      [event.target.name]: value,
    });
    console.log(setDadosState);
    console.log(dadosState);
  }
  function teste() {
    if (dadosState.name.length > 0 && dadosState.email.length) {
      alert("nome: " + dadosState.name + " email " + dadosState.email);
    } else alert("Campos vazios");
  }
  const submiteHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submiteHandler}>
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
      <button onClick={teste}>Submite</button>
    </form>
  );
}

export default Formulario;
