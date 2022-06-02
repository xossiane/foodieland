import React, { useState } from "react";
import "./NewsletterInput.scss";
import salad from "/assets/salad.png";
import vegetables from "/assets/vegetables.png";
import rucula from "/assets/rucula.png";

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
    <section className="newsletter-content">
      <img className="newsletter-content__salad" src={salad} />
      <img className="newsletter-content__rucula" src={rucula} />
      <img className="newsletter-content__vegetables" src={vegetables} />
      <div className="newsletter-content__title">
        <h1>Deliciousness to your inbox</h1>
      </div>
      <div className="newsletter-content__text">
        <p>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
        </p>
      </div>

      <div> 
        <form className="newsletter-content__btnInput__together" onSubmit={verifyInput}>
          <ContactInput
            className="newsletter_inputContainer"
            type="email"
            placeholder="Your email address..."
            name="email"
            value={emailState.email}
            onTextChange={handleChange}
          />
          <div>
            <button className="newsletter-content__button">Subscribe</button>
          </div>
        </form>
      </div>
    </section>
  );
}
export default InputComponent;
