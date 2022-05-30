import React, { useState } from "react";
import "./NewsletterInput.scss";
import direita from "/assets/direita.png";
import esquerda from "/assets/esquerda.png";
import direita2 from "/assets/direita2.png";

import { ContactInput } from "../../atoms";

const initialState = {
  email: "",
};

function InputComponent(props) {
  var [emailState, setEmailState] = useState(initialState);
  function handleChange(event) {
    const value = event.target.value;
    setEmailState({ ...emailState, [event.target.name]: value });
  }
  function verifyInput() {
    if (emailState.email.trim().length > 0) {
      alert("Thanks for your subscription");
      return true;
    } else {
      alert("Please enter your email for delicious recipes");
      console.log(emailState);
      return false;
    }
  }
  return (
    <div className="newsletter__content">
      <img className="direitaImage" src={direita} />
      <img className="direita__Image__2" src={direita2} />
      <img className="esquerdaImage" src={esquerda} />
      <div className="newsletter__title">
        <h1>Deliciousness to your inbox</h1>
      </div>
      <div className="newsletter__text">
        <p>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
        </p>
      </div>

      <div className="newsletter__btnInput__together">
        <form onSubmit={verifyInput}>
          <ContactInput
            className="newsletter_inputContainer"
            type="email"
            placeholder="Your email address..."
            name="email"
            value={emailState.email}
            onTextChange={handleChange}
          />
          <div>
            <button className="newsletter__button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default InputComponent;
