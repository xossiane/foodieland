import "./NewsletterInput.css";
import direita from "../../../../../public/assets/direita.png";
import esquerda from "../../../../../public/assets/esquerda.png";
import direita2 from "../../../../../public/assets/direita2.png";

function InputComponent(props) {
  function teste() {
    const input = document.querySelector("#inputNewsletter").value;
    if (input.length > 0) {
      alert("Thanks for your subscription");
    } else alert("Please, enter your email adress for more recipes");
    console.log(input);
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

      <input
        id="inputNewsletter"
        className="inputContainer"
        type="text"
        placeholder={props.texto}
      />
      <div>
        <button className="newsletter__button" onClick={teste}>
          Subscribe
        </button>
      </div>
      </div>
    </div>
  );
}
export default InputComponent;
