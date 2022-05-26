import "./NewsletterInput.css";
import direita from "/assets/direita.png";
import esquerda from "/assets/esquerda.png";
import direita2 from "/assets/direita2.png";

function InputComponent(props) {
  function teste(event) {
    event.preventDefault();
    const input = document.querySelector("#inputNewsletter").value;
    if (input.length > 0) {
      alert("Thanks for your subscription");
      /* alterar o querySelector para ref ou state, mudar o nome do evento teste */
      input = "";
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
        <form onSubmit={teste}>
          <input
            id="inputNewsletter"
            className="input inputContainer"
            type="email"
            placeholder={props.texto}
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
